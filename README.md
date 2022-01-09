# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone git@github.com:MadaShindeInai/nodejs2021Q4-service.git
cd ./nodejs2021Q4-service
git checkout service
```

## Installing NPM modules

```
npm install
```

## Running application
Once the application is installed, you can run it by executing the following commands in different terminals:
```
npx tsc -w
npm run start
```

After starting the app on port 4000 you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Docker
-1) Run docker desctop application
0) in separate console run npx tsc -w
1) install 'make'
2) run 'make network' (creates user-defined brige network)
2) run 'make build' (builds the docker image)
3) run 'make run-dev' (runs container with image in --restart mode in user-defined network)
4) you can make changes. As an example you can add some users to the database (src/resources/utils.js) and get them with the following command in console: curl http://localhost:4000/users
5) make stop (stops the docker container)

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
