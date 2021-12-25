import { FastifyRequest, FastifyReply } from 'fastify';
import usersRepo from './user.memory.repository';
import User from './user.model';

type UserRequest = FastifyRequest<{
  Body: User;
  Params: {
    userId: string;
  };
}>;
type UserCreate = FastifyRequest<{
  Body: Omit<User, 'id'>;
  Params: {
    userId: string;
  };
}>;

/**
 * Fastify middleware to get all users
 * @param _ - fastify request
 * @param reply - fastify reply
 */
export const getAllUsers = async (req: UserRequest, reply: FastifyReply) => {
  const users = await usersRepo.getAll();
  reply.send(users.map(User.toResponse));
};

/**
 * Fastify middleware to get user by id
 * @param req - fastify request
 * @param reply - fastify reply
 */
export const getUser = async (req: UserRequest, reply: FastifyReply) => {
  const user = await usersRepo.getUser(req.params.userId);
  if (!user) {
    reply.status(404).send(new Error('User not found'));
  } else {
    reply.send(User.toResponse(user));
  }
};

/**
 * Fastify middleware to add user
 * @param req - fastify request
 * @param reply - fastify reply
 */
export const addUser = async (req: UserCreate, reply: FastifyReply) => {
  const newUser = await usersRepo.addUser(req.body);
  reply.status(201).send(User.toResponse(newUser));
};

/**
 * Fastify middleware to update user
 * @param req - fastify request
 * @param reply -
 */
export const updateUser = async (req: UserRequest, reply: FastifyReply) => {
  const updatedUser = await usersRepo.updateUser(req.params.userId, req.body);
  if (!updatedUser) {
    reply.status(404).send(new Error('User not found'));
  } else {
    reply.status(200).send(User.toResponse(updatedUser));
  }
};

/**
 * Fastify middleware to delete user
 * @param req - fastify request
 * @param reply - fastify reply
 */
export const deleteUser = async (req: UserRequest, reply: FastifyReply) => {
  const isUserDeleted = await usersRepo.deleteUser(req.params.userId);
  if (!isUserDeleted) {
    reply.status(404).send(new Error('User not found'));
  }
  reply.status(204).send();
};
