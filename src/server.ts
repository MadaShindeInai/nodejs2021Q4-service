import fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { PORT, loggingConfig } from './common/config';
import users from './resources/users/user.router';
import boards from './resources/boards/board.router';
import tasks from './resources/tasks/task.router';
import { Logger } from './common/logger';
import { FastifyApp } from './types';

const __dirname = dirname(fileURLToPath(import.meta.url));

// LOGGING
const app: FastifyApp = fastify({
  logger: loggingConfig,
});
const logger = new Logger({ app });

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
      process.stdout.write(`App is running on http://localhost:${PORT}`);
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
