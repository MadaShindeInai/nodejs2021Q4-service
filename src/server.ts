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
import User from './resources/users/user.model';
import Board from './resources/boards/board.model';
import { defaultTask } from './resources/constants';
import Task from './resources/tasks/task.model';

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
    .then(async (connection) => {
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
      //   userId: '7631b223-9bac-45e2-a41f-6a723b32e3e3',
      //   boardId: 'bae273f6-b71e-4459-bcd2-0cb6eef20ea8',
      // });
      // await connection.manager.save(task);
      // stdout.write('Loading users from the database...');
      // const tasksDB = await connection.manager.find(Task);
      // console.log('🚀 ~ file: server.ts ~ line 32 ~ .then ~ users', tasksDB);
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
