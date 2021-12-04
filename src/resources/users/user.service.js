const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAllUsers = async (req, reply) => {
  const users = await usersRepo.getAll();
  reply.send(users.map(User.toResponse));
};

const getUser = async (req, reply) => {
  const user = await usersRepo.getUser(req.params.userId);
  if (!user) {
    return reply.status(404).send(new Error('User not found'));
  }
  return reply.send(User.toResponse(user));
};

module.exports = { getAllUsers, getUser };
