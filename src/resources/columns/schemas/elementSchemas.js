const typeString = { type: 'string' };
const typeNumber = { type: 'number' };

const columnRes = {
  type: 'object',
  properties: {
    id: typeString,
    title: typeString,
    order: typeNumber,
  },
};

const firstBoardsColumn = {
  type: 'object',
  properties: {
    title: typeString,
    order: typeNumber,
  },
};

module.exports = {
  columnRes,
  firstBoardsColumn,
};
