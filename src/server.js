const fastify = require('fastify')();
const { PORT } = require('./common/config');
const users = require('./resources/users/user.router');

fastify.register(users);

const startServer = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
startServer();
