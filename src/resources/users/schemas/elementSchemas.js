const typeString = { type: 'string' };

const userNoPass = {
  type: 'object',
  tags: ['User'],
  properties: {
    id: typeString,
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
