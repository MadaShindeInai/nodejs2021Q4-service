import {
  typeString,
  typeStringUUID,
  typeNumber,
  typeStringUUIDOrNull,
} from '../../constants';

export const taskRes = {
  type: 'object',
  properties: {
    id: typeStringUUID,
    title: typeString,
    order: typeNumber,
    description: typeString,
    userId: typeStringUUIDOrNull,
    boardId: typeStringUUIDOrNull,
    columnId: typeStringUUIDOrNull,
  },
};
export const taskBody = {
  type: 'object',
  properties: {
    title: typeString,
    order: typeNumber,
    description: typeString,
    userId: typeStringUUIDOrNull,
    boardId: typeStringUUIDOrNull,
    columnId: typeStringUUIDOrNull,
  },
};
