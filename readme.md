<div align="center">
<img src="https://socialify.git.ci/leafmoes/DDG-Chat/image?font=Inter&forks=1&issues=1&logo=https://duckduckgo.com/assets/logo_header.v109.svg&name=1&pattern=Plus&pulls=1&stargazers=1&theme=Auto" alt="DDG-Chat"/>

一键免费部署到 Vercel 你的 ChatGPT API 后端

支持 GPT4o mini, Claude 3 Haiku, Llama 3.1 70B, Mixtral 8x7B 模型

所有模型均由 DuckDuckGo 匿名提供

</div>

## 一键部署

<div align="center">

[<img src="https://vercel.com/button" alt="Deploy on Vercel" height="30">](https://vercel.com/new/clone?repository-url=https://github.com/leafmoes/ddg-chat&project-name=ddg-chat&repository-name=ddg-chat) 

[手动部署](https://github.com/leafmoes/DDG-Chat#手动部署)

</div>

## 演示API

请勿滥用

- [https://chatapi.r12.top](https://chatapi.r12.top)

## 网页端

请使用第三方 ChatGPT 应用调用接口，例如 [ChatNextWeb](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web)。

## 调用接口

### 对话请求

示例（其中 `chatapi.r12.top` 请替换为你自己部署后的域名）：

```bash
curl --request POST 'https://chatapi.r12.top/v1/chat/completions' \
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

示例（其中 `chatapi.r12.top` 请替换为你自己部署后的域名）：

访问 `http://chatapi.r12.top/v1/models` 可查看当前支持的模型

## 支持的模型

该模型名称同步使用 DDG 网页抓包所得 (未知模型均会被重定向到 gpt-4o-mini 模型)

- gpt-4o-mini
- claude-3-haiku
- llama-3.1-70b
- mixtral-8x7b

## 手动部署

### Docker

请准备一台具有公网IP的服务器并将8000端口开放。

拉取镜像并启动服务

```bash
docker run -it -d --init --name ddg-chat -p 8000:8000 -e TZ=Asia/Shanghai leafmoes/ddg-chat:latest
```

docker 相关命令

```bash
docker logs -f ddg-chat # 查看服务实时日志
docker restart ddg-chat # 重启服务
docker stop ddg-chat # 停止服务
```


### Vercel
方法一：本地 Clone 仓库部署
1. 首先确保你有 Nodejs 环境
2. 执行下面命令：

```bash
npm i -g vercel
vercel login
git clone https://github.com/leafmoes/ddg-chat
cd ddg-chat
vercel --prod
```

方法二：云端 Fork 仓库部署

1. [fork](https://github.com/leafmoes/ddg-chat/fork) 这个仓库到你的 Github
2. 进入 [Vercel New Project](https://vercel.com/new/) 网页，`Import` 你刚才 fork 的仓库
3. 点击 `Deploy` 即可

方法三：一键部署

[<img src="https://vercel.com/button" alt="Deploy on Vercel" height="30">](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fleafmoes%2Fddg-chat&project-name=ddg-chat&repository-name=ddg-chat)

### Render
1. [fork](https://github.com/leafmoes/ddg-chat/fork) 这个仓库到你的 Github
2. 点击下面按钮到 Render 官网，`Import` 你刚才 fork 的仓库，然后按正常部署流程走

[<img src="https://render.com/images/deploy-to-render-button.svg" alt="Deploy on Render" height="30">](https://render.com/deploy)

## 交流群组

[Telegram](https://t.me/None)

## Contributors

<a href="https://github.com/leafmoes/ddg-chat/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=leafmoes/ddg-chat" />
</a>

## LICENSE

[MIT License](https://github.com/leafmoes/DDG-Chat/blob/master/LICENSE)

