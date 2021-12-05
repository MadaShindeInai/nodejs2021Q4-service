const { typeString } = require('./elementSchemas');

const deleteUserSchema = {
  params: {
    boardId: typeString,
  },
  tags: ['Board'],
  response: {
    204: typeString,
  },
};
module.exports = deleteUserSchema;
