import { FastifyRequest, FastifyReply } from 'fastify';
import { LoginBody, loginRepo } from './login.repository';

type Login = FastifyRequest<{
  Body: LoginBody;
}>;

export const login = async (req: Login, reply: FastifyReply) => {
  const token = await loginRepo(req.body, reply);
  if (!token) {
    reply.status(403).send({ message: 'Incorrect login or password' });
  }
  reply.status(200).send({ token });
};
