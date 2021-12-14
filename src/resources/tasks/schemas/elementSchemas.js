const {
  typeString,
  typeStringUUID,
  typeNumber,
  typeStringUUIDOrNull,
} = require('../../constants');

const taskRes = {
  type: 'object',
  properties: {
    id: typeStringUUID,
    title: typeString,
    order: typeNumber,
    description: typeString,
    userId: typeStringUUIDOrNull,
    boardId: typeStringUUIDOrNull,
    columnId: typeStringUUIDOrNull,
  },
};
const taskBody = {
  type: 'object',
  properties: {
    title: typeString,
    order: typeNumber,
    description: typeString,
    userId: typeStringUUIDOrNull,
    boardId: typeStringUUIDOrNull,
    columnId: typeStringUUIDOrNull,
  },
};

module.exports = { taskBody, taskRes };
