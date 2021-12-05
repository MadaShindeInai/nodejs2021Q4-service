const { userNoPass, typeString } = require('./elementSchemas');

const getUserSchema = {
  params: {
    userId: typeString,
  },
  tags: ['User'],
  response: {
    200: userNoPass,
  },
};

module.exports = getUserSchema;
