import {
  getAllBoardsSchema,
  getBoardSchema,
  addBoardSchema,
  updateBoardSchema,
  deleteBoardSchema,
} from './schemas/index.mjs';
import {
  getAllBoards,
  getBoard,
  addBoard,
  updateBoard,
  deleteBoard,
} from './board.service.mjs';

const getAllBoardsOpts = {
  schema: getAllBoardsSchema,
  handler: getAllBoards,
};

const getBoardOpts = {
  schema: getBoardSchema,
  handler: getBoard,
};

const addBoardOpts = {
  schema: addBoardSchema,
  handler: addBoard,
};

const updateBoardOpts = {
  schema: updateBoardSchema,
  handler: updateBoard,
};

const deleteBoardOpts = {
  schema: deleteBoardSchema,
  handler: deleteBoard,
};

const boardRoutes = (fastify, options, done) => {
  fastify.get('/boards', getAllBoardsOpts);
  fastify.get('/boards/:boardId', getBoardOpts);
  fastify.post('/boards', addBoardOpts);
  fastify.put('/boards/:boardId', updateBoardOpts);
  fastify.delete('/boards/:boardId', deleteBoardOpts);
  done();
};

export default boardRoutes;
