import { FastifyInstance, FastifyLoggerInstance } from 'fastify';
import { Server, IncomingMessage, ServerResponse } from 'http';

export type FastifyApp = FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse,
  FastifyLoggerInstance
>;

export interface EnhancedFastifyApp extends FastifyApp {
  authenticate: () => void;
}
