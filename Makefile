run:
		docker run -d -p 4000:4000 --env-file ./.env --rm --name trello-clone madashindeinai/trello-clone:latest
run-dev:
		docker run -d --rm -p 4000:4000 --env-file ./.env -v "/Users/sergeinepryahin/Documents/Nodejs/nodejs2021Q4-service:/app" -v /app/node_modules --name trello-clone madashindeinai/trello-clone:latest
stop:
		docker stop trello-clone
build:
		docker build -t madashindeinai/trello-clone:latest .
start:
		docker start trello-clone