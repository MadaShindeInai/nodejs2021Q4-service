const { userNoId, userNoPass } = require('./elementSchemas');
const { typeStringUUID, res204 } = require('../../constants');

const getAllUsersSchema = {
  response: {
    200: {
      type: 'array',
      items: userNoPass,
    },
  },
};

const getUserSchema = {
  params: {
    userId: typeStringUUID,
  },
  tags: ['User'],
  response: {
    200: userNoPass,
  },
};

const addUserSchema = {
  body: userNoId,
  response: {
    201: userNoPass,
  },
};

const updateUserSchema = {
  params: {
    userId: typeStringUUID,
  },
  body: userNoId,
  response: {
    200: userNoPass,
  },
};

const deleteUserSchema = {
  params: {
    userId: typeStringUUID,
  },
  response: {
    204: res204,
  },
};

module.exports = {
  getAllUsersSchema,
  getUserSchema,
  addUserSchema,
  updateUserSchema,
  deleteUserSchema,
};
