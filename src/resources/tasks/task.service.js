const { validate } = require('uuid');
const tasksRepo = require('./task.memory.repository');

const getTasksByBoardId = async (req, reply) => {
  if (!validate(req.params.boardId)) {
    return reply
      .status(400)
      .send(new Error(`${req.params.boardId} is not uuid`));
  }
  const tasks = await tasksRepo.getTasksByBoardId(req.params.boardId);
  return reply.send(tasks);
};

// const getUser = async (req, reply) => {
//   if (!validate(req.params.userId)) {
//     return reply
//       .status(400)
//       .send(new Error(`${req.params.userId} is not uuid`));
//   }
//   const user = await usersRepo.getUser(req.params.userId);
//   if (!user) {
//     return reply.status(404).send(new Error('User not found'));
//   }
//   return reply.send(User.toResponse(user));
// };

// const addUser = async (req, reply) => {
//   const newUser = await usersRepo.addUser(req.body);

//   return reply.status(201).send(User.toResponse(newUser));
// };

// const updateUser = async (req, reply) => {
//   if (!validate(req.params.userId)) {
//     return reply
//       .status(400)
//       .send(new Error(`${req.params.userId} is not uuid`));
//   }
//   const updatedUser = await usersRepo.updateUser(req.params.userId, req.body);
//   if (!updatedUser) {
//     return reply.status(404).send(new Error('User not found'));
//   }
//   return reply.status(200).send(User.toResponse(updatedUser));
// };

// const deleteUser = async (req, reply) => {
//   if (!validate(req.params.userId)) {
//     return reply
//       .status(400)
//       .send(new Error(`${req.params.userId} is not uuid`));
//   }
//   const updatedUser = await usersRepo.deleteUser(req.params.userId);
//   if (!updatedUser) {
//     return reply.status(404).send(new Error('User not found'));
//   }
//   return reply.status(204).send();
// };

module.exports = { getTasksByBoardId };
