const { boardRes, typeString } = require('./elementSchemas');

const getBoardSchema = {
  params: {
    boardId: typeString,
  },
  tags: ['Board'],
  response: {
    200: boardRes,
  },
};

module.exports = getBoardSchema;
