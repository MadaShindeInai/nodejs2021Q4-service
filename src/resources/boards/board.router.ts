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

const boardRoutes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get('/boards', getAllBoardsOpts);
  fastify.get('/boards/:boardId', getBoardOpts);
  fastify.post('/boards', addBoardOpts);
  fastify.put('/boards/:boardId', updateBoardOpts);
  fastify.delete('/boards/:boardId', deleteBoardOpts);
  done();
};

export default boardRoutes;
