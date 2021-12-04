const { user, typeString } = require('./elementSchemas');

const getUserSchema = {
  params: {
    userId: typeString,
  },
  response: {
    200: user,
  },
};

module.exports = getUserSchema;
