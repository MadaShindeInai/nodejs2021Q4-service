const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAllUsers = async (req, reply) => {
  const users = await usersRepo.getAll();
  reply.send(users.map(User.toResponse));
};

const getUser = async (req, reply) => {
  const user = await usersRepo.getUser(req.params.userId);
  if (!user) {
    reply.status(404).send(new Error('User not found'));
  }
  reply.send(User.toResponse(user));
};

const addUser = async (req, reply) => {
  const newUser = await usersRepo.addUser(req.body);
  reply.status(201).send(User.toResponse(newUser));
};

const updateUser = async (req, reply) => {
  const updatedUser = await usersRepo.updateUser(req.params.userId, req.body);
  if (!updatedUser) {
    reply.status(404).send(new Error('User not found'));
  }
  reply.status(200).send(User.toResponse(updatedUser));
};

const deleteUser = async (req, reply) => {
  const isUserDeleted = await usersRepo.deleteUser(req.params.userId);
  if (!isUserDeleted) {
    reply.status(404).send(new Error('User not found'));
  }
  reply.status(204).send();
};

module.exports = { getAllUsers, getUser, addUser, updateUser, deleteUser };
