const { typeString, userNoId, userNoPass } = require('./elementSchemas');

const updateUserSchema = {
  body: userNoId,
  params: {
    userId: typeString,
  },
  tags: ['User'],
  response: {
    200: userNoPass,
  },
};

module.exports = updateUserSchema;
