import { userNoId, userNoPass } from './elementSchemas.mjs';
import { typeStringUUID, res204 } from '../../constants';

export const getAllUsersSchema = {
  response: {
    200: {
      type: 'array',
      items: userNoPass,
    },
  },
};

export const getUserSchema = {
  params: {
    userId: typeStringUUID,
  },
  response: {
    200: userNoPass,
  },
};

export const addUserSchema = {
  body: userNoId,
  response: {
    201: userNoPass,
  },
};

export const updateUserSchema = {
  params: {
    userId: typeStringUUID,
  },
  body: userNoId,
  response: {
    200: userNoPass,
  },
};

export const deleteUserSchema = {
  params: {
    userId: typeStringUUID,
  },
  response: {
    204: res204,
  },
};
