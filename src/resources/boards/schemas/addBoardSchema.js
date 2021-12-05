const { boardBody, boardRes } = require('./elementSchemas');

const addBoardSchema = {
  body: boardBody,
  tags: ['Board'],
  response: {
    201: boardRes,
  },
};

module.exports = addBoardSchema;
