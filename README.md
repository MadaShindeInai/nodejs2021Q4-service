# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading and installing

```
git clone git@github.com:MadaShindeInai/nodejs2021Q4-service.git
cd ./nodejs2021Q4-service
git checkout login
npm install
```
## Run in Docker
1) Run docker desktop application
3) Run "docker-compose up"
4) When you run app you can check that it is restarting (10 times limit) by typing in one more separate terminal:
```docker ps``` to get the container id/name and then:
```docker exec <db_container_name> pkill -f postgres```
```docker exec <app_container_name> pkill -f nodemon```
5) You will see instructions how to run migrations and tests in terminal! <----------!!!!!
After starting the app on port 4000 you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.
## Postgres initial migrations
1) Run 'npm run migration:generate' - generates migration files
2) Run 'npm run migration:run' - runs migration files

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
