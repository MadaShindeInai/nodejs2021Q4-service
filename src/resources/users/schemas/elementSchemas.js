const typeString = { type: 'string' };
const typeNumber = { type: 'number' };

const user = {
  type: 'object',
  properties: {
    id: typeNumber,
    name: typeString,
    login: typeString,
  },
};

module.exports = { user, typeString };
