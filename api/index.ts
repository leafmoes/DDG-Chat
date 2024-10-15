const axios = require("axios");
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

const FAKE_HEADERS = {
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br, zstd",
  "Accept-Language": "zh-CN,zh;q=0.9",
  Origin: "https://duckduckgo.com/",
  Cookie: "l=wt-wt; ah=wt-wt; dcm=6",
  Dnt: "1",
  Priority: "u=1, i",
  Referer: "https://duckduckgo.com/",
  "Sec-Ch-Ua":
    '"Microsoft Edge";v="129", "Not(A:Brand";v="8", "Chromium";v="129"',
  "Sec-Ch-Ua-Mobile": "?0",
  "Sec-Ch-Ua-Platform": '"Windows"',
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
};

const corsOptions = {
  origin: "*",
  methods: "POST",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.json({
    message: "API 服务运行中~",
  });
});

app.get("/ping", (_, res) => {
  res.json({
    message: "pong",
  });
});

app.post("/v1/chat/completions", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");

  const { model: inputModel, messages, stream: returnStream } = req.body;
  const model = convertModel(inputModel);
  try {
    const content = messagesPrepare(messages);
    const token = await requestToken();

    const result = await axios.post(
      `https://duckduckgo.com/duckchat/v1/chat`,
      {
        model: model,
        messages: [
          {
            role: "user",
            content: content,
          },
        ],
      },
      {
        headers: {
          ...FAKE_HEADERS,
          Accept: "text/event-stream",
          ContentType: "application/json",
          "x-vqd-4": token,
        },
        timeout: 300000,
        validateStatus: () => true,
        responseType: "stream",
      }
    );

    handlerStream(model, result.data, returnStream, res);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

function handlerStream(model, stream, returnStream, res) {
  if (returnStream) {
    res.type("text/event-stream");
  } else {
    res.type("application/json");
  }

  let previousText = "";
  stream.on("data", (chunk) => {
    const chunkStr = chunk.toString();
    chunkStr.split("\n").forEach((line) => {
      if (line.length < 6) {
        return;
      }
      line = line.slice(6);
      if (line !== "[DONE]") {
        const originReq = JSON.parse(line);
        if (originReq.action !== "success") {
          res.status(500).send("Error");
          return;
        }
        if (originReq.message) {
          previousText += originReq.message;
          const translatedResponse = newChatCompletionChunkWithModel(
            originReq.message,
            originReq.model
          );
          if (returnStream) {
            const responseString = `data: ${JSON.stringify(
              translatedResponse
            )}\n\n`;
            res.write(responseString);
          }
        }
      } else {
        if (returnStream) {
          res.write(
            `data: ${JSON.stringify(stopChunkWithModel("stop", model))}\n\n`
          );
          res.end();
        } else {
          res.json(newChatCompletionWithModel(previousText, model));
        }
      }
    });
  });
}

function messagesPrepare(messages) {
  let content = "";
  for (const message of messages) {
    let role = message.role;

    if (role === "user" || role === "system" || role === "assistant") {
      if (role === "system") {
        role = "user";
      }
      let contentStr = "";
      if (Array.isArray(message.content)) {
        for (const element of message.content) {
          if (
            typeof element === "object" &&
            element !== null &&
            "type" in element &&
            "text" in element
          ) {
            if (element.type === "text") {
              contentStr = element.text;
              break;
            }
          }
        }
      } else {
        contentStr = message.content;
      }
      content += `${role}:${contentStr};\r\n`;
    }
  }
  return content;
}

async function requestToken() {
  const result = await axios.get(`https://duckduckgo.com/duckchat/v1/status`, {
    headers: {
      ...FAKE_HEADERS,
      "x-vqd-accept": "1",
    },
  });
  return result.headers["x-vqd-4"];
}

function convertModel(inputModel) {
  let model;
  switch (inputModel.toLowerCase()) {
    case "claude-3-haiku":
      model = "claude-3-haiku-20240307";
      break;
    case "llama-3.1-70b":
      model = "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo";
      break;
    case "mixtral-8x7b":
      model = "mistralai/Mixtral-8x7B-Instruct-v0.1";
      break;
  }
  return model || "gpt-4o-mini";
}

function newChatCompletionChunkWithModel(text, model) {
  return {
    id: "chatcmpl-QXlha2FBbmROaXhpZUFyZUF3ZXNvbWUK",
    object: "chat.completion.chunk",
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
  };
}

function stopChunkWithModel(reason, model) {
  return {
    id: "chatcmpl-QXlha2FBbmROaXhpZUFyZUF3ZXNvbWUK",
    object: "chat.completion.chunk",
    created: 0,
    model,
    choices: [
      {
        index: 0,
        finish_reason: reason,
      },
    ],
  };
}

function newChatCompletionWithModel(text, model) {
  return {
    id: "chatcmpl-QXlha2FBbmROaXhpZUFyZUF3ZXNvbWUK",
    object: "chat.completion",
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
          role: "assistant",
        },
        index: 0,
      },
    ],
  };
}

app.listen(3000, () => {
  console.log("Server listening on http://localhost:3000");
});

module.exports = app;
// module.exports.maxDuration = 60;
