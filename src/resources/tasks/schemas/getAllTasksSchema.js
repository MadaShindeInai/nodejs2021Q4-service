const { typeString, taskShape } = require('./elementSchemas');

const getTasksByBoardIdSchema = {
  params: {
    boardId: typeString,
  },
  tags: ['Task'],
  response: {
    200: {
      type: 'array',
      items: taskShape,
    },
  },
};

module.exports = getTasksByBoardIdSchema;
