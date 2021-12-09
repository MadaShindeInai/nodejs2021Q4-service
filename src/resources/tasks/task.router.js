import {
  getTasksByBoardIdSchema,
  getTaskByBoardAndTaskIdSchema,
  addTaskSchema,
  updateTaskSchema,
  deleteTaskSchema,
} from './schemas';
import {
  getTasksByBoardId,
  getTaskByBoardAndTaskId,
  addTask,
  updateTask,
  deleteTask,
} from './task.service';

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

const updateTaskOpts = {
  schema: updateTaskSchema,
  handler: updateTask,
};

const deleteTaskOpts = {
  schema: deleteTaskSchema,
  handler: deleteTask,
};

const tasksRoutes = (fastify, options, done) => {
  fastify.get('/boards/:boardId/tasks', getTasksByBoardIdOpts);
  fastify.get('/boards/:boardId/tasks/:taskId', getTaskByBoardAndTaskIdOpts);
  fastify.post('/boards/:boardId/tasks', addTaskOpts);
  fastify.put('/boards/:boardId/tasks/:taskId', updateTaskOpts);
  fastify.delete('/boards/:boardId/tasks/:taskId', deleteTaskOpts);
  done();
};

export default tasksRoutes;
