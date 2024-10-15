FROM node:lts AS builder

WORKDIR /app

COPY . /app

RUN yarn install --registry https://registry.npmmirror.com/

FROM zenika/alpine-chrome:124-with-node

COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/api /app/api
COPY --from=builder /app/node_modules /app/node_modules

WORKDIR /app

USER root

EXPOSE 8000

CMD ["npm", "start"]