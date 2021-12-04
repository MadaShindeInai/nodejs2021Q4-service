const { typeString } = require('./elementSchemas');

const addUserSchema = {
  body: {
    type: 'object',
    required: ['name', 'login', 'password'],
    properties: {
      name: typeString, // recall we created typeString earlier
      login: typeString,
      password: typeString,
    },
  },
  response: {
    201: typeString,
  },
};

module.exports = addUserSchema;
