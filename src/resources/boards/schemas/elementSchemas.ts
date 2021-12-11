import { columnRes, columnBody } from '../../columns/schemas/elementSchemas';
import { typeString, typeStringUUID } from '../../constants';

export const boardRes = {
  type: 'object',
  properties: {
    id: typeStringUUID,
    title: typeString,
    columns: {
      type: 'array',
      items: columnRes,
    },
  },
};

export const boardBody = {
  type: 'object',
  properties: {
    title: typeString,
    columns: {
      type: 'array',
      items: columnBody,
    },
  },
};
