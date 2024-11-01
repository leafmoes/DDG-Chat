FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8787

CMD ["npm", "start"]
