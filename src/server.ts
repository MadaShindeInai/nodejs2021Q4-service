import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import helmet from 'fastify-helmet';
import fastifySwagger from 'fastify-swagger';
import fastifyFormbody from 'fastify-formbody';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { PORT, loggingConfig } from './common/config';
import users from './resources/users/user.router';
import boards from './resources/boards/board.router';
import tasks from './resources/tasks/task.router';

const __dirname = dirname(fileURLToPath(import.meta.url));

// LOGGING
const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: loggingConfig,
});
app.addHook('preHandler', (req, _, done) => {
  if (req.body) {
    req.log.info({ body: req.body }, 'parsed body');
  }
  done();
});

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
app.register(helmet, { contentSecurityPolicy: false });
app.register(fastifyFormbody);

app.ready((err) => {
  if (err) throw err;
  app.swagger();
});

// ERROR HANDLING
process.on('uncaughtException', (reason) => {
  app.log.error(`CAPTURED ERROR:${reason.message}`);
  process.exit(1);
});
// throw Error('Oops!');

process.on('unhandledRejection', (reason: Error) => {
  app.log.error(`UNHANDLED REJECTION DETECTED:${reason.message}`);
  process.exit(1);
});
// Promise.reject(Error('Oops!'));

// ROUTES
app.register(users);
app.register(boards);
app.register(tasks);

const startServer = async () => {
  try {
    await app.listen(PORT);
  } catch (err) {
    if (err instanceof Error) {
      app.log.error(err.message);
      process.exit(1);
    }
  }
};
startServer();
