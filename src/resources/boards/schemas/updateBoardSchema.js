const { typeString, boardBody, boardRes } = require('./elementSchemas');

const updateBoardSchema = {
  body: boardBody,
  params: {
    boardId: typeString,
  },
  tags: ['Board'],
  response: {
    200: boardRes,
  },
};

module.exports = updateBoardSchema;
