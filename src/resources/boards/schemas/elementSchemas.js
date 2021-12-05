const {
  columnRes,
  firstBoardsColumn,
} = require('../../columns/schemas/elementSchemas');

const typeString = { type: 'string' };

const boardRes = {
  type: 'object',
  properties: {
    id: typeString,
    title: typeString,
    columns: {
      type: 'array',
      items: columnRes,
    },
  },
};

const boardBody = {
  type: 'object',
  properties: {
    id: typeString,
    title: typeString,
    columns: {
      type: 'array',
      items: firstBoardsColumn,
    },
  },
};

module.exports = { boardRes, typeString, boardBody };
