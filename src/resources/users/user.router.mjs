import {
  getAllUsersSchema,
  getUserSchema,
  addUserSchema,
  updateUserSchema,
  deleteUserSchema,
} from './schemas/index.mjs';
import {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from './user.service.mjs';

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

const usersRoutes = (fastify, options, done) => {
  fastify.get('/users', getAllUsersOpts);
  fastify.get('/users/:userId', getUserOpts);
  fastify.post('/users', addUserOpts);
  fastify.put('/users/:userId', updateUserOpts);
  fastify.delete('/users/:userId', deleteUserOpts);
  done();
};

export default usersRoutes;
