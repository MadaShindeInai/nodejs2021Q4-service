const { boardRes } = require('./elementSchemas');

const getAllUsersSchema = {
  tags: ['Board'],
  response: {
    200: {
      type: 'array',
      items: boardRes,
    },
  },
};

module.exports = getAllUsersSchema;
