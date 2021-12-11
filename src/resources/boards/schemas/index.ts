import { boardBody, boardRes } from './elementSchemas';
import { typeStringUUID, res204 } from '../../constants';

export const getAllBoardsSchema = {
  response: {
    200: {
      type: 'array',
      items: boardRes,
    },
  },
};

export const getBoardSchema = {
  params: {
    boardId: typeStringUUID,
  },
  required: ['boardId'],
  response: {
    200: boardRes,
  },
};

export const addBoardSchema = {
  body: boardBody,
  response: {
    201: boardRes,
  },
};

export const updateBoardSchema = {
  params: {
    boardId: typeStringUUID,
  },
  body: boardBody,
  response: {
    200: boardRes,
  },
};

export const deleteBoardSchema = {
  params: {
    boardId: typeStringUUID,
  },
  response: {
    204: res204,
  },
};
