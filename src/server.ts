import fastify, { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import helmet from 'fastify-helmet';
import fastifySwagger from 'fastify-swagger';
import fastifyFormbody from 'fastify-formbody';
import path from 'path';
import { PORT } from './common/config';
import users from './resources/users/user.router';
import boards from './resources/boards/board.router';
import tasks from './resources/tasks/task.router';

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify();
app.register(helmet);
app.register(fastifyFormbody);

// TODO: reslve problem with swagger
app.register(fastifySwagger, {
  mode: 'static',
  specification: {
    path: path.join(__dirname, '../doc/api.yaml'),
    baseDir: '/src',
  },
  exposeRoute: true,
  routePrefix: '/doc',
});

app.ready((err) => {
  if (err) throw err;
  app.swagger();
});

app.register(users);
app.register(boards);
app.register(tasks);

const startServer = async () => {
  try {
    await app.listen(PORT);
  } catch (err) {
    app.log.error(err);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};
startServer();