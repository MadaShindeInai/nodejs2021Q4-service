const { taskBody, taskRes, typeString } = require('./elementSchemas');

const getTasksByBoardIdSchema = {
  params: {
    boardId: typeString,
  },
  response: {
    200: {
      type: 'array',
      items: taskRes,
    },
  },
};

const getTaskByBoardAndTaskIdSchema = {
  params: {
    boardId: typeString,
    taskId: typeString,
  },
  response: {
    200: taskRes,
  },
};
const addTaskSchema = {
  params: {
    boardId: typeString,
  },
  body: taskBody,
  response: {
    201: taskRes,
  },
};

module.exports = {
  getTasksByBoardIdSchema,
  addTaskSchema,
  getTaskByBoardAndTaskIdSchema,
};
