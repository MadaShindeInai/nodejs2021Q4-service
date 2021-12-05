const typeString = { type: 'string' };
const typeStringOrNull = { type: ['string', 'null'] };

const taskShape = {
  type: 'object',
  properties: {
    id: typeString,
    title: typeString,
    order: typeString,
    description: typeString,
    userId: typeStringOrNull,
    boardId: typeStringOrNull,
    columnId: typeStringOrNull,
  },
};

module.exports = { taskShape, typeString };
