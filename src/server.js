const fastify = require('fastify')();
const path = require('path');
const { PORT } = require('./common/config');
const users = require('./resources/users/user.router');
const boards = require('./resources/boards/board.router');

fastify.register(require('fastify-swagger'), {
  mode: 'static',
  specification: {
    path: path.join(__dirname, '../doc/api.yaml'),
  },
  exposeRoute: true,
  routePrefix: '/doc',
});

fastify.ready((err) => {
  if (err) throw err;
  fastify.swagger();
});

fastify.register(users);
fastify.register(boards);

const startServer = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
startServer();
