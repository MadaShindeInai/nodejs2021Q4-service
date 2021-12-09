import { typeString, typeStringUUID } from '../../constants';

export const userNoPass = {
  type: 'object',
  properties: {
    id: typeStringUUID,
    name: typeString,
    login: typeString,
  },
};

export const userNoId = {
  type: 'object',
  required: ['name', 'login', 'password'],
  properties: {
    name: typeString,
    login: typeString,
    password: typeString,
  },
};
