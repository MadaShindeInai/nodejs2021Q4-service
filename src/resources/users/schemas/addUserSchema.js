const { userNoId, userNoPass } = require('./elementSchemas');

const addUserSchema = {
  body: userNoId,
  response: {
    201: userNoPass,
  },
};

module.exports = addUserSchema;
