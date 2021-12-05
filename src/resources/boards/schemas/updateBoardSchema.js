const { typeString, boardBody, boardRes } = require('./elementSchemas');

const updateUserSchema = {
  body: boardBody,
  params: {
    userId: typeString,
  },
  tags: ['User'],
  response: {
    200: boardRes,
  },
};

module.exports = updateUserSchema;
