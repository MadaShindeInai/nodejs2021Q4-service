import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import { FastifyReply } from 'fastify';
import { JWT_SECRET_KEY } from '../../common/config';
import User from '../users/user.model';

export type LoginBody = { login: string; password: string };

export const loginRepo = async (data: LoginBody, reply: FastifyReply) => {
  const { login, password } = data;
  const usersRepo = await getRepository(User);
  const targetUser = await usersRepo.findOne({ login });
  if (!targetUser || !JWT_SECRET_KEY) return false;
  const passwordCheck = bcrypt.compareSync(password, targetUser.password);
  if (!passwordCheck) return false;
  const token = reply.jwtSign({
    data: { login, userId: targetUser.id },
  });
  return token;
};
