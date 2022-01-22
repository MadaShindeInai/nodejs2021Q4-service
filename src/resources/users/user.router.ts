import { FastifyPluginCallback } from 'fastify';
import { EnhancedFastifyApp } from '../../types';
import { addAuthToOpts } from '../utils';
import {
  getAllUsersSchema,
  getUserSchema,
  addUserSchema,
  updateUserSchema,
  deleteUserSchema,
} from './schemas';
import {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from './user.service';

const getAllUsersOpts = {
  schema: getAllUsersSchema,
  handler: getAllUsers,
};

const getUserOpts = {
  schema: getUserSchema,
  handler: getUser,
};

const addUserOpts = {
  schema: addUserSchema,
  handler: addUser,
};

const updateUserOpts = {
  schema: updateUserSchema,
  handler: updateUser,
};

const deleteUserOpts = {
  schema: deleteUserSchema,
  handler: deleteUser,
};

/**
 * Fastify plugin for user routes
 * @param fastify - fastify instance
 * @param _ - not used (fastify options)
 * @param done - callback function
 */
const usersRoutes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get(
    '/users',
    addAuthToOpts(fastify as EnhancedFastifyApp, getAllUsersOpts)
  );
  fastify.get(
    '/users/:userId',
    addAuthToOpts(fastify as EnhancedFastifyApp, getUserOpts)
  );
  fastify.post(
    '/users',
    addAuthToOpts(fastify as EnhancedFastifyApp, addUserOpts)
  );
  fastify.put(
    '/users/:userId',
    addAuthToOpts(fastify as EnhancedFastifyApp, updateUserOpts)
  );
  fastify.delete(
    '/users/:userId',
    addAuthToOpts(fastify as EnhancedFastifyApp, deleteUserOpts)
  );
  done();
};

export default usersRoutes;
