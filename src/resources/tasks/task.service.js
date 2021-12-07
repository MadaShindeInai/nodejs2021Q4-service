const tasksRepo = require('./task.memory.repository');
const { validateUUID } = require('../utils');

const getTasksByBoardId = async (req, reply) => {
  validateUUID(reply, req.params.boardId);
  const tasks = await tasksRepo.getTasksByBoardId(req.params.boardId);
  reply.send(tasks);
};

const addTask = async (req, reply) => {
  validateUUID(reply, req.params.boardId);
  const newTask = await tasksRepo.addTask(req.body);
  reply.status(201).send(newTask);
};

const getTaskByBoardAndTaskId = async (req, reply) => {
  const { boardId, taskId } = req.params;
  validateUUID(reply, boardId);
  validateUUID(reply, taskId);
  const task = await tasksRepo.getTaskByBoardAndTaskId(boardId, taskId);
  if (!task) {
    reply.status(404).send(new Error('User not found'));
  }
  reply.send(task);
};

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

module.exports = { getTasksByBoardId, addTask, getTaskByBoardAndTaskId };
