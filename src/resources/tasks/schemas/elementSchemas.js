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
    boardId: typeString,
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
    boardId: typeStringUUID,
    columnId: typeStringUUIDOrNull,
  },
};

module.exports = { taskBody, taskRes };
