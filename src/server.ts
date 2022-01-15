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
import { ormConfig } from './common/ormconfig';

// LOGGING
const app: FastifyApp = fastify({
  logger: loggingConfig,
});
const logger = new Logger({ app });

// creating DB
(async () => {
  await createConnection(ormConfig as ConnectionOptions)
    .then(async () => {
      // stdout.write('Inserting a new user into the database...');
      // const user = new User({ name: 'hh', login: '11', password: 'qq' });
      // await connection.manager.save(user);
      // stdout.write('Loading users from the database...');
      // const usersDB = await connection.manager.find(User);
      // console.log('🚀 ~ file: server.ts ~ line 32 ~ .then ~ users', usersDB);
      // stdout.write('Inserting a new board into the database...');
      // const board = new Board({ title: 'test' });
      // await connection.manager.save(board);
      // stdout.write('Loading users from the database...');
      // const boadrsDB = await connection.manager.find(Board);
      // console.log('🚀 ~ file: server.ts ~ line 32 ~ .then ~ users', boadrsDB);
      // stdout.write('Inserting a new task into the database...');
      // const task = new Task({
      //   ...defaultTask,
      //   userId: 'b20f4349-e710-48b7-afd0-06dd05746998',
      //   boardId: 'c0315fea-0750-4c0b-aaf4-f950e370fd9b',
      // });
      // await connection.manager.save(task);
      // stdout.write('Loading users from the database...');
      // const tasksDB = await connection.manager.find(User);
      // console.log('🚀 ~ file: server.ts ~ line 32 ~ .then ~ users', tasksDB);
    })
    .catch((error) => console.log(error));
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
