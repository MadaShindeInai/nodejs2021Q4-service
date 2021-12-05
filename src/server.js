const fastify = require('fastify')();
const { PORT } = require('./common/config');
const users = require('./resources/users/user.router');

fastify.register(require('fastify-swagger'), {
  routePrefix: '/doc',
  swagger: {
    info: {
      title: 'REST Api Swagger',
      description: 'REST Api Swagger API',
      version: '0.1.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost:4000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'User', description: 'User related end-points' },
      { name: 'Task', description: 'Task related end-points' },
      { name: 'Board', description: 'Board related end-points' },
    ],
    definitions: {
      User: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          login: { type: 'string' },
          password: { type: 'string' },
        },
      },
    },
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'apiKey',
        in: 'header',
      },
    },
  },
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false,
  },
  uiHooks: {
    onRequest(request, reply, next) {
      next();
    },
    preHandler(request, reply, next) {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  exposeRoute: true,
});

fastify.ready((err) => {
  if (err) throw err;
  fastify.swagger();
});

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
