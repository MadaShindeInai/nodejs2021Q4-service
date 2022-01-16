import fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';
import path from 'path';
import { ConnectionOptions, createConnection } from 'typeorm';
import { PORT, loggingConfig } from './common/config';
import users from './resources/users/user.router';
import boards from './resources/boards/board.router';
import tasks from './resources/tasks/task.router';
import { Logger } from './common/logger';
import { FastifyApp } from './types';
import ormConfig from './common/ormconfig';
import { stderr, stdout } from 'process';

// LOGGING
const app: FastifyApp = fastify({
  logger: loggingConfig,
});
const logger = new Logger({ app });

// creating DB
(async () => {
  await createConnection({
    ...ormConfig,
    host: 'postgres',
  } as ConnectionOptions)
    .then(async () => {
      stdout.write(
        'If it is the first run:\nrun `npm run migration:generate` and `npm run migration:run` to make initial tables\n'
      );
      stdout.write('They you can run `npm run test`\n');
      stdout.write('Swagger available on `localhost:4000/doc`\n');
    })
    .catch((error) => stderr.write(error));
})();

// SWAGGER
app.register(fastifySwagger, {
  mode: 'static',
  specification: {
    path: path.join(__dirname, '../doc/api.yaml'),
    baseDir: path.join(__dirname, '../doc/'),
  },
  exposeRoute: true,
  routePrefix: '/doc',
});

app.ready((err) => {
  if (err) throw err;
  app.swagger();
});

// ROUTES
app.register(users);
app.register(boards);
app.register(tasks);

const startServer = async () => {
  try {
    await app.listen(PORT, '0.0.0.0', (): void => {
      process.stdout.write(`App is running on http://localhost:${PORT}\n`);
    });
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message);
      process.exit(1);
    }
  }
};
startServer();

// ERROR HANDLING
process.on('uncaughtException', (reason) => {
  logger.error(`CAPTURED ERROR:${reason.message}`);
  process.exit(1);
});
// throw Error('Oops!');

process.on('unhandledRejection', (reason: Error) => {
  logger.error(`UNHANDLED REJECTION DETECTED: ${reason.message}`);
  process.exit(1);
});
// Promise.reject(Error('Oops Promise!'));
