const { typeString, typeStringUUID, typeNumber } = require('../../constants');

const columnRes = {
  type: 'object',
  properties: {
    id: typeStringUUID,
    title: typeString,
    order: typeNumber,
  },
};

const columnBody = {
  type: 'object',
  properties: {
    title: typeString,
    order: typeNumber,
  },
};

module.exports = {
  columnRes,
  columnBody,
};
