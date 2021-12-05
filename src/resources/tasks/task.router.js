const {
  getTasksByBoardIdSchema,
  // getUserSchema,
  // addUserSchema,
  // updateUserSchema,
  // deleteUserSchema,
} = require('./schemas');
const {
  getTasksByBoardId,
  // getUser,
  // addUser,
  // updateUser,
  // deleteUser,
} = require('./task.service');

const getTasksByBoardIdOpts = {
  schema: getTasksByBoardIdSchema,
  handler: getTasksByBoardId,
};

// const getUserOpts = {
//   schema: getUserSchema,
//   handler: getUser,
// };

// const addUserOpts = {
//   schema: addUserSchema,
//   handler: addUser,
// };

// const updateUserOpts = {
//   schema: updateUserSchema,
//   handler: updateUser,
// };

// const deleteUserOpts = {
//   schema: deleteUserSchema,
//   handler: deleteUser,
// };

const usersRoutes = (fastify, options, done) => {
  fastify.get('/boards/:boardId/tasks', getTasksByBoardIdOpts);
  // fastify.get('/boards/:boardId/tasks/:taskId', getTaskOpts);
  // fastify.post('/boards/:boardId/tasks', addTaskOpts);
  // fastify.put('/boards/:boardId/tasks/:taskId', updateTaskOpts);
  // fastify.delete('/boards/:boardId/tasks/:taskId', deleteTaskOpts);
  done();
};

module.exports = usersRoutes;
