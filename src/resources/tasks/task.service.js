const tasksRepo = require('./task.memory.repository');

const getTasksByBoardId = async (req, reply) => {
  const tasks = await tasksRepo.getTasksByBoardId(req.params.boardId);
  reply.send(tasks);
};

const addTask = async (req, reply) => {
  const newTask = await tasksRepo.addTask(req.body);
  reply.status(201).send(newTask);
};

const getTaskByBoardAndTaskId = async (req, reply) => {
  const { boardId, taskId } = req.params;
  const task = await tasksRepo.getTaskByBoardAndTaskId(boardId, taskId);
  if (!task) {
    reply.status(404).send(new Error('Task not found'));
  }
  reply.send(task);
};

const updateTask = async (req, reply) => {
  const { boardId, taskId } = req.params;
  const updatedTask = await tasksRepo.updateTask(boardId, taskId, req.body);
  if (!updatedTask) {
    return reply.status(404).send(new Error('Task not found'));
  }
  return reply.status(200).send(updatedTask);
};

const deleteTask = async (req, reply) => {
  const { boardId, taskId } = req.params;
  const isTaskDeleted = await tasksRepo.deleteTask(boardId, taskId);
  if (!isTaskDeleted) {
    return reply.status(404).send(new Error('Task not found'));
  }
  return reply.status(204).send();
};

module.exports = {
  getTasksByBoardId,
  addTask,
  getTaskByBoardAndTaskId,
  deleteTask,
  updateTask,
};
