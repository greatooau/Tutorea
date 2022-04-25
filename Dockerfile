FROM node:16-alpine

ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

WORKDIR /app

ADD package.json .

ADD yarn.lock .

RUN yarn add global expo-cli

RUN yarn install

ADD . .

CMD ["yarn", "start"]