const { user } = require('./elementSchemas');

const getAllUsersSchema = {
  response: {
    200: {
      type: 'array',
      items: user,
    },
  },
};

module.exports = getAllUsersSchema;
