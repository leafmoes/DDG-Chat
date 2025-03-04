import { createServerAdapter } from '@whatwg-node/server'
import { AutoRouter, json, error, cors } from 'itty-router'
import { createServer } from 'http'
import dotenv from 'dotenv'

dotenv.config()

class Config {
  constructor() {
    this.PORT = process.env.PORT || 8787
    this.API_PREFIX = process.env.API_PREFIX || '/'
    this.API_KEY = process.env.API_KEY || ''
    this.MAX_RETRY_COUNT = process.env.MAX_RETRY_COUNT || 3
    this.RETRY_DELAY = process.env.RETRY_DELAY || 5000
    this.FAKE_HEADERS = process.env.FAKE_HEADERS || {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'zh-CN,zh;q=0.9',
      Origin: 'https://duckduckgo.com/',
      Cookie: 'dcm=3',
      Dnt: '1',
      Priority: 'u=1, i',
      Referer: 'https://duckduckgo.com/',
      'Sec-Ch-Ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Windows"',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
    }
  }
}

const config = new Config()

const { preflight, corsify } = cors({
  origin: '*',
  allowMethods: '*',
  exposeHeaders: '*',
})

const withBenchmarking = (request) => {
  request.start = Date.now()
}

const withAuth = (request) => {
  if (config.API_KEY) {
    const authHeader = request.headers.get('Authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return error(401, 'Unauthorized: Missing or invalid Authorization header')
    }
    const token = authHeader.substring(7)
    if (token !== config.API_KEY) {
      return error(403, 'Forbidden: Invalid API key')
    }
  }
}

const logger = (res, req) => {
  console.log(req.method, res.status, req.url, Date.now() - req.start, 'ms')
}

const router = AutoRouter({
  before: [withBenchmarking, preflight, withAuth],
  missing: () => error(404, '404 Not Found. Please check whether the calling URL is correct.'),
  finally: [corsify, logger],
})

router.get('/', () => json({ message: 'API 服务运行中~' }))
router.get('/ping', () => json({ message: 'pong' }))
router.get(config.API_PREFIX + '/v1/models', () =>
  json({
    object: 'list',
    data: [
      { id: 'gpt-4o-mini', object: 'model', owned_by: 'ddg' },
      { id: 'claude-3-haiku', object: 'model', owned_by: 'ddg' },
      { id: 'llama-3.3-70b', object: 'model', owned_by: 'ddg' },
      { id: 'mixtral-small-3', object: 'model', owned_by: 'ddg' },
      { id: 'o3-mini', object: 'model', owned_by: 'ddg' },
    ],
  })
)

router.post(config.API_PREFIX + '/v1/chat/completions', (req) => handleCompletion(req))

async function handleCompletion(request) {
  try {
    const { model: inputModel, messages, stream: returnStream } = await request.json()
    const model = convertModel(inputModel)
    const content = messagesPrepare(messages)
    return createCompletion(model, content, returnStream)
  } catch (err) {
    return error(500, err.message)
  }
}

async function createCompletion(model, content, returnStream, retryCount = 0) {
  const token = await requestToken()
  try {
    const response = await fetch(`https://duckduckgo.com/duckchat/v1/chat`, {
      method: 'POST',
      headers: {
        ...config.FAKE_HEADERS,
        Accept: 'text/event-stream',
        'Content-Type': 'application/json',
        'x-vqd-4': token,
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'user',
            content: content,
          },
        ],
      }),
    })

    if (!response.ok) {
      throw new Error(`Create Completion error! status: ${response.status}`)
    }
    return handlerStream(model, response.body, returnStream)
  } catch (err) {
    console.log(err)
    if (retryCount < config.MAX_RETRY_COUNT) {
      console.log('Retrying... count', ++retryCount)
      await new Promise((resolve) => setTimeout(resolve, config.RETRY_DELAY))
      return await createCompletion(model, content, returnStream, retryCount)
    }
    throw err
  }
}

async function handlerStream(model, rb, returnStream) {
  let bwzChunk = ''
  let previousText = ''
  const handChunkData = (chunk) => {
    chunk = chunk.trim()
    if (bwzChunk != '') {
      chunk = bwzChunk + chunk
      bwzChunk = ''
    }

    if (chunk.includes('[DONE]')) {
      return chunk
    }

    if (chunk.slice(-2) !== '"}') {
      bwzChunk = chunk
    }
    return chunk
  }
  const reader = rb.getReader()
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read()
        if (done) {
          return controller.close()
        }
        const chunkStr = handChunkData(decoder.decode(value))
        if (bwzChunk !== '') {
          continue
        }

        chunkStr.split('\n').forEach((line) => {
          if (line.length < 6) {
            return
          }
          line = line.slice(6)
          if (line !== '[DONE]') {
            const originReq = JSON.parse(line)

            if (originReq.action !== 'success') {
              return controller.error(new Error('Error: originReq stream chunk is not success'))
            }

            if (originReq.message) {
              previousText += originReq.message
              if (returnStream) {
                controller.enqueue(
                  encoder.encode(`data: ${JSON.stringify(newChatCompletionChunkWithModel(originReq.message, originReq.model))}\n\n`)
                )
              }
            }
          } else {
            if (returnStream) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify(newStopChunkWithModel('stop', model))}\n\n`))
            } else {
              controller.enqueue(encoder.encode(JSON.stringify(newChatCompletionWithModel(previousText, model))))
            }
            return controller.close()
          }
        })
        continue
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': returnStream ? 'text/event-stream' : 'application/json',
    },
  })
}

function messagesPrepare(messages) {
  let content = ''
  for (const message of messages) {
    let role = message.role === 'system' ? 'user' : message.role

    if (['user', 'assistant'].includes(role)) {
      const contentStr = Array.isArray(message.content)
        ? message.content
          .filter((item) => item.text)
          .map((item) => item.text)
          .join('') || ''
        : message.content
      content += `${role}:${contentStr};\r\n`
    }
  }
  return content
}

async function requestToken() {
  try {
    const response = await fetch(`https://duckduckgo.com/duckchat/v1/status`, {
      method: 'GET',
      headers: {
        ...config.FAKE_HEADERS,
        'x-vqd-accept': '1',
      },
    })
    const token = response.headers.get('x-vqd-4')
    return token
  } catch (error) {
    console.log("Request token error: ", err)
  }
}

function convertModel(inputModel) {
  let model
  switch (inputModel.toLowerCase()) {
    case 'claude-3-haiku':
      model = 'claude-3-haiku-20240307'
      break
    case 'llama-3.3-70b':
      model = 'meta-llama/Llama-3.3-70B-Instruct-Turbo'
      break
    case 'mixtral-small-3':
      model = 'mistralai/Mistral-Small-24B-Instruct-2501'
      break
    case 'o3-mini':
      model = 'o3-mini'
      break
  }
  return model || 'gpt-4o-mini'
}

function newChatCompletionChunkWithModel(text, model) {
  return {
    id: 'chatcmpl-QXlha2FBbmROaXhpZUFyZUF3ZXNvbWUK',
    object: 'chat.completion.chunk',
    created: 0,
    model,
    choices: [
      {
        index: 0,
        delta: {
          content: text,
        },
        finish_reason: null,
      },
    ],
  }
}

function newStopChunkWithModel(reason, model) {
  return {
    id: 'chatcmpl-QXlha2FBbmROaXhpZUFyZUF3ZXNvbWUK',
    object: 'chat.completion.chunk',
    created: 0,
    model,
    choices: [
      {
        index: 0,
        finish_reason: reason,
      },
    ],
  }
}

function newChatCompletionWithModel(text, model) {
  return {
    id: 'chatcmpl-QXlha2FBbmROaXhpZUFyZUF3ZXNvbWUK',
    object: 'chat.completion',
    created: 0,
    model,
    usage: {
      prompt_tokens: 0,
      completion_tokens: 0,
      total_tokens: 0,
    },
    choices: [
      {
        message: {
          content: text,
          role: 'assistant',
        },
        index: 0,
      },
    ],
  }
}

// Serverless Service

(async () => {
  //For Cloudflare Workers
  if (typeof addEventListener === 'function') return
  // For Nodejs
  const ittyServer = createServerAdapter(router.fetch)
  console.log(`Listening on http://localhost:${config.PORT}`)
  const httpServer = createServer(ittyServer)
  httpServer.listen(config.PORT)
})()

// export default router
