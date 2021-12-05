const { typeString } = require('./elementSchemas');

const deletePostSchema = {
  params: {
    id: { type: 'string' },
  },
  response: {
    204: typeString,
  },
};
module.exports = deletePostSchema;
