const { userNoId, userNoPass } = require('./elementSchemas');

const addUserSchema = {
  body: userNoId,
  tags: ['User'],
  response: {
    201: userNoPass,
  },
};

module.exports = addUserSchema;
