import fastify from 'fastify';
// import path from 'path';
import { PORT } from './common/config';
import users from './resources/users/user.router';
import boards from './resources/boards/board.router';
import tasks from './resources/tasks/task.router';

const fastifyServer = fastify();

// TODO: reslve problem with swagger
// fastifyServer.register(require('fastify-swagger'), {
//   mode: 'static',
//   specification: {
//     path: path.join(__dirname, '../doc/api.yaml'),
//   },
//   exposeRoute: true,

//   routePrefix: '/doc',
// });

// fastifyServer.ready((err) => {
//   if (err) throw err;
//   fastifyServer.swagger();
// });

fastifyServer.register(users);
fastifyServer.register(boards);
fastifyServer.register(tasks);

const startServer = async () => {
  try {
    await fastifyServer.listen(PORT);
  } catch (err) {
    fastifyServer.log.error(err);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  }
};
startServer();
