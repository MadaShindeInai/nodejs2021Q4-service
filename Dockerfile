#-------------------
# Dockerfile to build Docker Image of Trello-clone application
#
# Made by Sergey Nepryahin
#-------------------
FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ENV PORT 4000

VOLUME [ "/dist/logs.log" ]

EXPOSE $PORT

CMD ["npm","run","start"]