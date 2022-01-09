run-dev:
		docker run -p 4000:4000 --env-file ./.env --restart on-failure:10 --network user-defined -v "/Users/sergeinepryahin/Documents/Nodejs/nodejs2021Q4-service:/app" -v /app/node_modules --name trello-clone madashindeinai/trello-clone:latest
stop:
		docker stop trello-clone
build:
		docker build -t madashindeinai/trello-clone:latest .
start:
		docker start trello-clone
network:
		docker network create -d bridge user-defined
build-db:
		docker build ./postgres -t madashindeinai/postgres-for-trello-clone
compose:
		docker-compose up

# docker run --name madashindeinai/trello-clone:latest
