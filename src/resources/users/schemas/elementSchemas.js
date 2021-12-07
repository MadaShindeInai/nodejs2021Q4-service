const { typeString, typeStringUUID } = require('../../constants');

const userNoPass = {
  type: 'object',
  properties: {
    id: typeStringUUID,
    name: typeString,
    login: typeString,
  },
};

const userNoId = {
  type: 'object',
  required: ['name', 'login', 'password'],
  properties: {
    name: typeString,
    login: typeString,
    password: typeString,
  },
};

module.exports = { userNoPass, typeString, userNoId };
