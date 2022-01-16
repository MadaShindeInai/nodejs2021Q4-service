import { FastifyInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

export type FastifyApp = FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
>;
