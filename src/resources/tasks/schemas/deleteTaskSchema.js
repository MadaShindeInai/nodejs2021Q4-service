const { typeString } = require('./elementSchemas');

const deleteUserSchema = {
  params: {
    userId: typeString,
  },
  tags: ['User'],
  response: {
    204: typeString,
  },
};
module.exports = deleteUserSchema;
