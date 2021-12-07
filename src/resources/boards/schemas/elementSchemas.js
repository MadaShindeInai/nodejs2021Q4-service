const {
  columnRes,
  columnBody,
} = require('../../columns/schemas/elementSchemas');
const { typeString, typeStringUUID } = require('../../constants');

const boardRes = {
  type: 'object',
  properties: {
    id: typeStringUUID,
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
    title: typeString,
    columns: {
      type: 'array',
      items: columnBody,
    },
  },
};

module.exports = { boardRes, typeString, boardBody };
