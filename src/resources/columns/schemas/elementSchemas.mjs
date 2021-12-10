import { typeString, typeStringUUID, typeNumber } from '../../constants';

export const columnRes = {
  type: 'object',
  properties: {
    id: typeStringUUID,
    title: typeString,
    order: typeNumber,
  },
};

export const columnBody = {
  type: 'object',
  properties: {
    title: typeString,
    order: typeNumber,
  },
};
