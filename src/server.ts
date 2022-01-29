import fastify, { FastifyReply, FastifyRequest } from 'fastify';
import fastifySwagger from 'fastify-swagger';
import path from 'path';
import fastifyJWT from 'fastify-jwt';
import { ConnectionOptions, createConnection } from 'typeorm';
import { stderr, stdout } from 'process';
import { PORT, loggingConfig, JWT_SECRET_KEY } from './common/config';
import users from './resources/users/user.router';
import boards from './resources/boards/board.router';
import tasks from './resources/tasks/task.router';
import { Logger } from './common/logger';
import { FastifyApp } from './types';
import ormConfig from './common/ormconfig';
import { loginRoutes } from './resources/login/login.router';

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
      stdout.write('Swagger available on http://localhost:4000/doc\n');
      stdout.write(
        'If it is first launch of the application \nopen second terminal and run: `npm run migration:run`\nto make initial tables and add `admin` user\n'
      );
      stdout.write('Then you can run `npm run test:auth`\n');
    })
    .catch((error) => stderr.write(error));
})();

// adding JWT plugin

if (!JWT_SECRET_KEY) throw Error('JWT key not found!');
app.register(fastifyJWT, {
  secret: JWT_SECRET_KEY,
});

app.decorate(
  'authenticate',
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  }
);

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
app.register(loginRoutes);
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
