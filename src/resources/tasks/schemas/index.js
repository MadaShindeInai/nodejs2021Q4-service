const { taskBody, taskRes } = require('./elementSchemas');
const { res204, typeStringUUID } = require('../../constants');

const getTasksByBoardIdSchema = {
  params: {
    boardId: typeStringUUID,
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
    boardId: typeStringUUID,
    taskId: typeStringUUID,
  },
  response: {
    200: taskRes,
  },
};

const addTaskSchema = {
  params: {
    boardId: typeStringUUID,
  },
  body: taskBody,
  response: {
    201: taskRes,
  },
};

const updateTaskSchema = {
  params: {
    boardId: typeStringUUID,
    taskId: typeStringUUID,
  },
  body: taskBody,
  response: {
    200: taskRes,
  },
};

const deleteTaskSchema = {
  params: {
    boardId: typeStringUUID,
    taskId: typeStringUUID,
  },
  response: {
    204: res204,
  },
};

module.exports = {
  getTasksByBoardIdSchema,
  addTaskSchema,
  getTaskByBoardAndTaskIdSchema,
  deleteTaskSchema,
  updateTaskSchema,
};
