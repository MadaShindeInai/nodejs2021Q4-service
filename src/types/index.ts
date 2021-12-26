import { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';
import Board from '../resources/boards/board.model';
import Task from '../resources/tasks/task.model';
import User from '../resources/users/user.model';

export type DB = {
  users: User[];
  boards: Board[];
  tasks: Task[];
};

export type FastifyApp = FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
>;
