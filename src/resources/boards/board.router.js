const {
  getAllBoardsSchema,
  getBoardSchema,
  addBoardSchema,
  // updateUserSchema,
  // deleteUserSchema,
} = require('./schemas');
const {
  getAllBoards,
  getBoard,
  addBoard,
  // updateUser,
  // deleteUser,
} = require('./board.service');

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

// const updateUserOpts = {
//   schema: updateUserSchema,
//   handler: updateUser,
// };

// const deleteUserOpts = {
//   schema: deleteUserSchema,
//   handler: deleteUser,
// };

const usersRoutes = (fastify, options, done) => {
  fastify.get('/boards', getAllBoardsOpts);
  fastify.get('/boards/:boardId', getBoardOpts);
  fastify.post('/boards', addBoardOpts);
  // fastify.put('/users/:userId', updateUserOpts);
  // fastify.delete('/users/:userId', deleteUserOpts);
  done();
};

module.exports = usersRoutes;
