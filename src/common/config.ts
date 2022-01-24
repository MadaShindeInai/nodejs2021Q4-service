import dotenv from 'dotenv';
import { FastifyReply, FastifyRequest } from 'fastify';
import path from 'path';

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export const PORT = process.env.PORT || 4000;
export const { POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } =
  process.env;
export const { JWT_SECRET_KEY } = process.env;
export const AUTH_MODE = process.env.AUTH_MODE === 'true';
const { LOG_LEVEL } = process.env;
export const loggingConfig = {
  file: path.join(__dirname, '../../logs/logs.log'),
  prettyPrint: {
    translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
    colorize: false,
  },
  level: LOG_LEVEL,
  serializers: {
    res(reply: FastifyReply) {
      // The default
      return {
        statusCode: reply.statusCode,
      };
    },
    req(request: FastifyRequest) {
      return {
        method: request.method,
        url: request.url,
        path: request.routerPath,
        parameters: request.params,
      };
    },
  },
};
