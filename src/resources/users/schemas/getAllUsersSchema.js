const { userNoPass } = require('./elementSchemas');

const getAllUsersSchema = {
  response: {
    200: {
      type: 'array',
      items: userNoPass,
    },
  },
};

module.exports = getAllUsersSchema;
