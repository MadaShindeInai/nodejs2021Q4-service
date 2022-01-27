# Dockerfile to build Docker Image of Trello-clone application
#-------------------
FROM node:16.13-alpine3.15

# RUN apk --no-cache add --virtual .builds-deps build-base python3

# WORKDIR /app

# COPY package*.json ./

# RUN npm install && npm rebuild bcrypt --build-from-source && npm cache clean --force

# COPY . .

# EXPOSE $PORT

# CMD ["npm","start"]