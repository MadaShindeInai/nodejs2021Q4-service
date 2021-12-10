import { taskBody, taskRes } from './elementSchemas.mjs';
import { res204, typeStringUUID } from '../../constants';

export const getTasksByBoardIdSchema = {
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

export const getTaskByBoardAndTaskIdSchema = {
  params: {
    boardId: typeStringUUID,
    taskId: typeStringUUID,
  },
  response: {
    200: taskRes,
  },
};

export const addTaskSchema = {
  params: {
    boardId: typeStringUUID,
  },
  body: taskBody,
  response: {
    201: taskRes,
  },
};

export const updateTaskSchema = {
  params: {
    boardId: typeStringUUID,
    taskId: typeStringUUID,
  },
  body: taskBody,
  response: {
    200: taskRes,
  },
};

export const deleteTaskSchema = {
  params: {
    boardId: typeStringUUID,
    taskId: typeStringUUID,
  },
  response: {
    204: res204,
  },
};
