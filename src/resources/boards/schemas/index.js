const { boardBody, boardRes, typeString } = require('./elementSchemas');

const getAllBoardsSchema = {
  response: {
    200: {
      type: 'array',
      items: boardRes,
    },
  },
};

const getBoardSchema = {
  params: {
    boardId: typeString,
  },
  response: {
    200: boardRes,
  },
};

const addBoardSchema = {
  body: boardBody,
  response: {
    201: boardRes,
  },
};

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

const deleteBoardSchema = {
  params: {
    boardId: typeString,
  },
  tags: ['Board'],
  response: {
    204: typeString,
  },
};

module.exports = {
  getAllBoardsSchema,
  getBoardSchema,
  addBoardSchema,
  updateBoardSchema,
  deleteBoardSchema,
};
