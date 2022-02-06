up:
		docker-compose --env-file .express.env up 
dev:
		npm run start:dev
admin-user:
		npx sequelize-cli db:migrate



