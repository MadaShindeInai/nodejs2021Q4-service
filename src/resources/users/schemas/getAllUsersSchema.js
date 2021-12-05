const { userNoPass } = require('./elementSchemas');

const getAllUsersSchema = {
  tags: ['User'],
  response: {
    200: {
      type: 'array',
      items: userNoPass,
    },
  },
};

module.exports = getAllUsersSchema;
