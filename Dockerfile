#-------------------
# Dockerfile to build Docker Image of Trello-clone application
#
# Made by Sergey Nepryahin
#-------------------
FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm install --production

COPY . .

EXPOSE $PORT

CMD ["npm","run","start"]