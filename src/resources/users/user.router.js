const { getAllUsersSchema, getUserSchema } = require('./schemas');
const { getAllUsers, getUser } = require('./user.service');

const getAllUsersOpts = {
  schema: getAllUsersSchema,
  handler: getAllUsers,
};
const getUserOpts = {
  schema: getUserSchema,
  handler: getUser,
};

const usersRoutes = (fastify, options, done) => {
  fastify.get('/users', getAllUsersOpts);
  fastify.get('/users/:userId', getUserOpts);
  done();
};

module.exports = usersRoutes;
