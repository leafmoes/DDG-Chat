> [!WARNING]
> 由于 DuckDuckGo 的单IP并发限制，导致429错误，以及无服务器环境 Vercel, Cloudflare Workers 基本被 DuckDuckGo 封禁等[原因](https://github.com/leafmoes/DDG-Chat/issues/19#issuecomment-2698038822)
> 本项目已归档，请尝试其他项目，非常感谢你对本项目的支持，但我们不得不再见！

<div align="center">
<img src="https://socialify.git.ci/leafmoes/DDG-Chat/image?font=Inter&forks=1&issues=1&logo=https://duckduckgo.com/assets/logo_header.v109.svg&name=1&pattern=Plus&pulls=1&stargazers=1&theme=Auto" alt="DDG-Chat"/>

一键免费部署到各种平台你的 ChatGPT API 后端

支持 Vercel, Cloudflare Workers, Docker, Render 等

支持 o3 mini, GPT 4o mini, Claude 3 Haiku, Llama 3.3 70B, Mixtral Small 3 模型

所有模型均由 DuckDuckGo 匿名提供

</div>

## 一键部署

<div align="center">

[<img src="https://vercel.com/button" alt="Deploy on Vercel" height="30">](https://vercel.com/new/clone?repository-url=https://github.com/leafmoes/ddg-chat&project-name=ddg-chat&repository-name=ddg-chat) 

</div>

## 手动部署

<div align="center">

[Vercel](https://github.com/leafmoes/DDG-Chat#vercel) / [Cloudflare Workers](https://github.com/leafmoes/DDG-Chat#cloudflare-workers) / [Docker](https://github.com/leafmoes/DDG-Chat#docker) / [Render](https://github.com/leafmoes/DDG-Chat#render) / [Hugging Face](https://github.com/leafmoes/DDG-Chat#hugging-face) / More Serverless

</div>

## 演示API

请勿滥用

- [https://chatcfapi.r12.top](https://chatcfapi.r12.top)

## 建议使用方式

使用第三方 ChatGPT 应用来调用接口，例如：
- [ChatNextWeb](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web)
- [沉浸式翻译](https://immersivetranslate.com)

## 调用接口

### 对话请求

示例（其中 `chatcfapi.r12.top` 请替换为你自己部署后的域名）：

```bash
curl --request POST 'https://chatcfapi.r12.top/v1/chat/completions' \
  --header 'Content-Type: application/json' \
  --data '{
    "messages": [
      {
        "role": "user",
        "content": "你好！"
      }
    ],
    "model": "gpt-4o-mini",
    "stream": true
  }'
```

### 模型查询

示例（其中 `chatcfapi.r12.top` 请替换为你自己部署后的域名）：

访问 `http://chatcfapi.r12.top/v1/models` 可查看当前支持的模型

## 支持的模型

该模型名称同步使用 DDG 网页抓包所得 (未知模型均会被重定向到 gpt-4o-mini 模型)

- gpt-4o-mini
- claude-3-haiku
- llama-3.3-70b
- mixtral-small-3
- o3-mini

## 手动部署

为了避免触发 DDG API 的并发限制，在使用 Docker 等本地部署方案时，请确保项目运行在代理池中。
同时，由于 Vercel 和 Cloudflare 的 IP 已被 DDG 屏蔽（可能由于过多用户使用或触发临时风控），不再建议通过这些方式部署。

### Vercel（不推荐）

方法一：云端 Fork 仓库部署

1. [fork](https://github.com/leafmoes/ddg-chat/fork) 这个仓库到你的 Github
2. 进入 [Vercel New Project](https://vercel.com/new/) 网页，`Import` 你刚才 fork 的仓库
3. 点击 `Deploy` 即可

方法二：本地 Clone 仓库部署
1. 首先确保你有 Nodejs 环境
2. 执行下面命令：

```bash
npm i -g vercel
vercel login
git clone https://github.com/leafmoes/DDG-Chat.git ddg-chat
cd ddg-chat
npm run publish
```

方法三：一键部署

[<img src="https://vercel.com/button" alt="Deploy on Vercel" height="30">](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fleafmoes%2Fddg-chat&project-name=ddg-chat&repository-name=ddg-chat)

### Render
1. [fork](https://github.com/leafmoes/ddg-chat/fork) 这个仓库到你的 Github
2. 点击下面按钮到 Render 官网，`Import` 你刚才 fork 的仓库，然后按正常部署流程走

[<img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy on Render" height="30">](https://render.com/deploy)

### Cloudflare Workers（不推荐）

方法一：

1. 进入 Cloudflare Workers 和 Pages 控制台，创建一个 Workers
2. 进入 Workers 设置，在 `运行时` 设置 `兼容性标志` 为 `nodejs_compat`
2. 粘贴 [此文件](https://github.com/leafmoes/DDG-Chat/blob/master/dist/index.js) 内部代码到你的 Workers，然后点击部署

方法二：

1. 首先确保你有 Nodejs 环境
2. 首先执行下面命令：

```bash
npm i -g wrangler
wrangler login
git clone https://github.com/leafmoes/DDG-Chat.git ddg-chat
cd ddg-chat
npm install
```

3. 打开文件 /api/index.js ，取消最后一行的注释，然后执行 `npm run publish:cf`

### Hugging Face (推荐)

1. 创建一个新空间：[Create a new Space ](https://huggingface.co/new-space)
    ```
    Space name：ddg-chat
    License： MIT
    Select the Space SDK： docker （Blank）
    Space hardware： free
    ```

2. 设置环境变量
    转到 Settings -> Variables and secrets -> Variables 配置环境变量
    貌似必须设置 `API_PREFIX`，由于抱抱脸的限制？
    环境变量在帖子里面

3. 编辑 README.md 文件
    在 metadata 添加 `app_port: 8787` 这个 8787 取决于你 docker 镜像的端口

4. 添加 Dockerfile 文件：
    ```
    FROM docker.io/leafmoes/ddg-chat:latest
    ```

### Docker

方法一：命令行构建
```bash
docker run -it -d --name ddg-chat -p 8787:8787 leafmoes/ddg-chat:latest
```

方法二：使用 `docker-compose.yml` 文件构建

下载保存 [docker-compose.yml](https://github.com/leafmoes/DDG-Chat/blob/master/docker-compose.yml) 文件，然后在该文件所在目录运行 `docker-compose up -d` 来启动服务。

Docker 相关命令

```bash
docker logs -f ddg-chat # 查看服务实时日志
docker restart ddg-chat # 重启服务
docker stop ddg-chat # 停止服务
```

## 环境变量

```bash
# API 服务使用的端口
PORT = 8787
# API 调用的前缀地址
API_PREFIX = '/'
# 作为调用 API 验证的 API Key
API_KEY = 'dummy_key'
# 向 DDG 发送请求失败的重试次数
MAX_RETRY_COUNT = 3
# 向 DDG 发送请求失败的重试延迟，单位 ms
RETRY_DELAY = 5000
```

## 常见问题

1. Vercel 部署有何限制？
   - 免费版单次 API 请求时长为 60s
   - 免费版每月 API 调用次数为 100,000 次
   - 官方文档 - [Vercel 函数限制](https://vercel.com/docs/functions/limitations#vercel-functions-limitations)
2. 是否计划增加前端应用？
   - 不考虑，请使用其他的优秀项目，例如：[ChatNextWeb](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web)
3. 为什么报错 `429 ERR_SERVICE_UNAVAILABLE`，如何解决？
   - 非 Vercel 容易出现此问题，由于 DDG API 限制单 IP 并发，建议减少并发量，同时使用代理池进行请求。

## 交流群组

[Telegram](https://t.me/None)

## Contributors

<a href="https://github.com/leafmoes/ddg-chat/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=leafmoes/ddg-chat" />
</a>

## LICENSE

[MIT License](https://github.com/leafmoes/DDG-Chat/blob/master/LICENSE)

