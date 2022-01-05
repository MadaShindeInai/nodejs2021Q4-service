#-------------------
# Dockerfile to build Docker Image of Trello-clone application
#
# Made by Sergey Nepryahin
#-------------------
FROM node:latest

WORKDIR /app

COPY . .

RUN npm install --production

EXPOSE 4000

CMD ["npm","run","start"]