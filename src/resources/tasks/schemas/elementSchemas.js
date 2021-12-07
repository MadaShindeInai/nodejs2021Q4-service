const typeString = { type: 'string' };
const typeNumber = { type: 'string' };
const typeStringOrNull = { type: ['string', 'null'] };

const taskRes = {
  type: 'object',
  properties: {
    id: typeString,
    title: typeString,
    order: typeNumber,
    description: typeString,
    userId: typeStringOrNull,
    boardId: typeString,
    columnId: typeStringOrNull,
  },
};
const taskBody = {
  type: 'object',
  properties: {
    title: typeString,
    order: typeNumber,
    description: typeString,
    userId: typeStringOrNull,
    boardId: typeString,
    columnId: typeStringOrNull,
  },
};

module.exports = { taskBody, taskRes, typeString };
