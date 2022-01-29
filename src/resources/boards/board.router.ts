import { FastifyPluginCallback } from 'fastify';
import {
  getAllBoardsSchema,
  getBoardSchema,
  addBoardSchema,
  updateBoardSchema,
  deleteBoardSchema,
} from './schemas';
import {
  getAllBoards,
  getBoard,
  addBoard,
  updateBoard,
  deleteBoard,
} from './board.service';
import { EnhancedFastifyApp } from '../../types';
import { addAuthToOpts } from '../utils';

const getAllBoardsOpts = {
  method: 'GET',
  url: '/boards',
  schema: getAllBoardsSchema,
  handler: getAllBoards,
};

const getBoardOpts = {
  method: 'GET',
  url: '/boards/:boardId',
  schema: getBoardSchema,
  handler: getBoard,
};

const addBoardOpts = {
  method: 'POST',
  url: '/boards',
  schema: addBoardSchema,
  handler: addBoard,
};

const updateBoardOpts = {
  method: 'PUT',
  url: '/boards/:boardId',
  schema: updateBoardSchema,
  handler: updateBoard,
};

const deleteBoardOpts = {
  method: 'DELETE',
  url: '/boards/:boardId',
  schema: deleteBoardSchema,
  handler: deleteBoard,
};

/**
 * Fastify plugin to register board routes
 * @param fastify - fastify instance
 * @param _ - not used (fastify options)
 * @param done - callback
 */
const boardRoutes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get(
    '/boards',
    addAuthToOpts(fastify as EnhancedFastifyApp, getAllBoardsOpts)
  );
  fastify.get(
    '/boards/:boardId',
    addAuthToOpts(fastify as EnhancedFastifyApp, getBoardOpts)
  );
  fastify.post(
    '/boards',
    addAuthToOpts(fastify as EnhancedFastifyApp, addBoardOpts)
  );
  fastify.put(
    '/boards/:boardId',
    addAuthToOpts(fastify as EnhancedFastifyApp, updateBoardOpts)
  );
  fastify.delete(
    '/boards/:boardId',
    addAuthToOpts(fastify as EnhancedFastifyApp, deleteBoardOpts)
  );
  done();
};

export default boardRoutes;
