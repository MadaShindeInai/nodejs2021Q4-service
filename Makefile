up:
		docker-compose up
db:
		docker-compose --env-file .express.env up -d 
dev:
		npm run start:dev



