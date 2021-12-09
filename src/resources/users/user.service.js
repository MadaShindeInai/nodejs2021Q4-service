import usersRepo from './user.memory.repository';
import User from './user.model';

export const getAllUsers = async (req, reply) => {
  const users = await usersRepo.getAll();
  reply.send(users.map(User.toResponse));
};

export const getUser = async (req, reply) => {
  const user = await usersRepo.getUser(req.params.userId);
  if (!user) {
    reply.status(404).send(new Error('User not found'));
  }
  reply.send(User.toResponse(user));
};

export const addUser = async (req, reply) => {
  const newUser = await usersRepo.addUser(req.body);
  reply.status(201).send(User.toResponse(newUser));
};

export const updateUser = async (req, reply) => {
  const updatedUser = await usersRepo.updateUser(req.params.userId, req.body);
  if (!updatedUser) {
    reply.status(404).send(new Error('User not found'));
  }
  reply.status(200).send(User.toResponse(updatedUser));
};

export const deleteUser = async (req, reply) => {
  const isUserDeleted = await usersRepo.deleteUser(req.params.userId);
  if (!isUserDeleted) {
    reply.status(404).send(new Error('User not found'));
  }
  reply.status(204).send();
};
