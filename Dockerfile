# Dockerfile to build Docker Image of Trello-clone application
#-------------------
FROM node:16.13-alpine3.15

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

EXPOSE $PORT

CMD ["npm","run","start:dev"]