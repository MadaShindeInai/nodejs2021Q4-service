const { userNoPass, typeString } = require('./elementSchemas');

const getUserSchema = {
  params: {
    userId: typeString,
  },
  response: {
    200: userNoPass,
  },
};

module.exports = getUserSchema;
