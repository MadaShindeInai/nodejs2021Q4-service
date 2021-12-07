const { boardBody, boardRes } = require('./elementSchemas');
const { typeStringUUID, res204 } = require('../../constants');

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
    boardId: typeStringUUID,
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
  params: {
    boardId: typeStringUUID,
  },
  body: boardBody,
  response: {
    200: boardRes,
  },
};

const deleteBoardSchema = {
  params: {
    boardId: typeStringUUID,
  },
  response: {
    204: res204,
  },
};

module.exports = {
  getAllBoardsSchema,
  getBoardSchema,
  addBoardSchema,
  updateBoardSchema,
  deleteBoardSchema,
};
