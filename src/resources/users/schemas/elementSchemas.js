const typeString = { type: 'string' };

const user = {
  type: 'object',
  properties: {
    id: typeString,
    name: typeString,
    login: typeString,
  },
};

module.exports = { user, typeString };
