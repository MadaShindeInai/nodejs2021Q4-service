import { FastifyRequest, FastifyReply } from 'fastify';
import usersRepo from './user.memory.repository';
import User from './user.model';

type UserRequest = FastifyRequest<{
  Body: User;
  Params: {
    userId: string;
  };
}>;

export const getAllUsers = async (req: UserRequest, reply: FastifyReply) => {
  const users = await usersRepo.getAll();
  reply.send(users.map(User.toResponse));
};

export const getUser = async (req: UserRequest, reply: FastifyReply) => {
  const user = await usersRepo.getUser(req.params.userId);
  if (!user) {
    reply.status(404).send(new Error('User not found'));
  } else {
    reply.send(User.toResponse(user));
  }
};

export const addUser = async (req: UserRequest, reply: FastifyReply) => {
  const newUser = await usersRepo.addUser(req.body);
  reply.status(201).send(User.toResponse(newUser));
};

export const updateUser = async (req: UserRequest, reply: FastifyReply) => {
  const updatedUser = await usersRepo.updateUser(req.params.userId, req.body);
  if (!updatedUser) {
    reply.status(404).send(new Error('User not found'));
  } else {
    reply.status(200).send(User.toResponse(updatedUser));
  }
};

export const deleteUser = async (req: UserRequest, reply: FastifyReply) => {
  const isUserDeleted = await usersRepo.deleteUser(req.params.userId);
  if (!isUserDeleted) {
    reply.status(404).send(new Error('User not found'));
  }
  reply.status(204).send();
};
