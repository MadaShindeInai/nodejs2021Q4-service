const {
  getTasksByBoardIdSchema,
  getTaskByBoardAndTaskIdSchema,
  addTaskSchema,
  // updateUserSchema,
  // deleteUserSchema,
} = require('./schemas');
const {
  getTasksByBoardId,
  getTaskByBoardAndTaskId,
  addTask,
  // updateUser,
  // deleteUser,
} = require('./task.service');

const getTasksByBoardIdOpts = {
  schema: getTasksByBoardIdSchema,
  handler: getTasksByBoardId,
};

const getTaskByBoardAndTaskIdOpts = {
  schema: getTaskByBoardAndTaskIdSchema,
  handler: getTaskByBoardAndTaskId,
};

const addTaskOpts = {
  schema: addTaskSchema,
  handler: addTask,
};

// const updateUserOpts = {
//   schema: updateUserSchema,
//   handler: updateUser,
// };

// const deleteUserOpts = {
//   schema: deleteUserSchema,
//   handler: deleteUser,
// };

const tasksRoutes = (fastify, options, done) => {
  fastify.get('/boards/:boardId/tasks', getTasksByBoardIdOpts);
  fastify.get('/boards/:boardId/tasks/:taskId', getTaskByBoardAndTaskIdOpts);
  fastify.post('/boards/:boardId/tasks', addTaskOpts);
  // fastify.put('/boards/:boardId/tasks/:taskId', updateTaskOpts);
  // fastify.delete('/boards/:boardId/tasks/:taskId', deleteTaskOpts);
  done();
};

module.exports = tasksRoutes;
