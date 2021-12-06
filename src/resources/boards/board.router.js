const {
  getAllBoardsSchema,
  getBoardSchema,
  // addBoardSchema,
  // updateBoardSchema,
  // deleteBoardSchema,
} = require('./schemas');
const {
  getAllBoards,
  getBoard,
  // addBoard,
  // updateBoard,
  // deleteBoard,
} = require('./board.service');

const getAllBoardsOpts = {
  schema: getAllBoardsSchema,
  handler: getAllBoards,
};

const getBoardOpts = {
  schema: getBoardSchema,
  handler: getBoard,
};

// const addBoardOpts = {
//   schema: addBoardSchema,
//   handler: addBoard,
// };

// const updateBoardOpts = {
//   schema: updateBoardSchema,
//   handler: updateBoard,
// };

// const deleteBoardOpts = {
//   schema: deleteBoardSchema,
//   handler: deleteBoard,
// };

const boardRoutes = (fastify, options, done) => {
  fastify.get('/boards', getAllBoardsOpts);
  fastify.get('/boards/:boardId', getBoardOpts);
  // fastify.post('/boards', addBoardOpts);
  // fastify.put('/boards/:boardId', updateBoardOpts);
  // fastify.delete('/boards/:boardId', deleteBoardOpts);
  done();
};

module.exports = boardRoutes;
