import { FastifyPluginCallback } from 'fastify';
import { typeString } from '../constants';
import { login } from './login.service';

export const loginBody = {
  type: 'object',
  properties: {
    login: typeString,
    password: typeString,
  },
};

export const loginRes = {
  type: 'object',
  properties: {
    token: typeString,
  },
};

export const loginSchema = {
  body: loginBody,
  response: {
    200: loginRes,
  },
};

const loginOpts = {
  schema: loginSchema,
  handler: login,
};

/**
 * Fastify plugin for login route
 * @param fastify - fastify instance
 * @param _ - not used (fastify options)
 * @param done - callback
 */
export const loginRoutes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.post('/login', loginOpts);
  done();
};
