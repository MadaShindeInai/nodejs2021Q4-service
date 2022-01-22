import { FastifyPluginCallback } from 'fastify';
import { EnhancedFastifyApp } from '../../types';
import {
  getTasksByBoardIdSchema,
  getTaskByBoardAndTaskIdSchema,
  addTaskSchema,
  updateTaskSchema,
  deleteTaskSchema,
} from './schemas';
import { addAuthToOpts } from '../utils';
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

/**
 * Fastify plugin for task routes
 * @param fastify - fastify instance
 * @param _ - not used (fastify options)
 * @param done - callback
 */
const tasksRoutes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get(
    '/boards/:boardId/tasks',
    addAuthToOpts(fastify as EnhancedFastifyApp, getTasksByBoardIdOpts)
  );
  fastify.get(
    '/boards/:boardId/tasks/:taskId',
    addAuthToOpts(fastify as EnhancedFastifyApp, getTaskByBoardAndTaskIdOpts)
  );
  fastify.post(
    '/boards/:boardId/tasks',
    addAuthToOpts(fastify as EnhancedFastifyApp, addTaskOpts)
  );
  fastify.put(
    '/boards/:boardId/tasks/:taskId',
    addAuthToOpts(fastify as EnhancedFastifyApp, updateTaskOpts)
  );
  fastify.delete(
    '/boards/:boardId/tasks/:taskId',
    addAuthToOpts(fastify as EnhancedFastifyApp, deleteTaskOpts)
  );
  done();
};

export default tasksRoutes;
