const {
  getAllUsersSchema,
  getUserSchema,
  addUserSchema,
} = require('./schemas');
const { getAllUsers, getUser, addUser } = require('./user.service');

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

const usersRoutes = (fastify, options, done) => {
  fastify.get('/users', getAllUsersOpts);
  fastify.get('/users/:userId', getUserOpts);
  fastify.post('/users', addUserOpts);
  done();
};

module.exports = usersRoutes;
