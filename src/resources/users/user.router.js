const User = require('./user.model');
const usersService = require('./user.service');

const usersRoutes = (fastify, options, done) => {
  fastify.get('/users', async (req, reply) => {
    const users = await usersService.getAll();
    reply.send(users.map(User.toResponse));
  });
  done();
};

module.exports = usersRoutes;
