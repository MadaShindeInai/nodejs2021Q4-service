import tasksRepo from './task.memory.repository';

export const getTasksByBoardId = async (req, reply) => {
  const tasks = await tasksRepo.getTasksByBoardId(req.params.boardId);
  reply.send(tasks);
};

export const addTask = async (req, reply) => {
  const newTask = await tasksRepo.addTask(req.body, req.params.boardId);
  reply.status(201).send(newTask);
};

export const getTaskByBoardAndTaskId = async (req, reply) => {
  const { boardId, taskId } = req.params;
  const task = await tasksRepo.getTaskByBoardAndTaskId(boardId, taskId);
  if (!task) {
    reply.status(404).send(new Error('Task not found'));
  }
  reply.send(task);
};

export const updateTask = async (req, reply) => {
  const { boardId, taskId } = req.params;
  const updatedTask = await tasksRepo.updateTask(boardId, taskId, req.body);
  if (!updatedTask) {
    reply.status(404).send(new Error('Task not found'));
  }
  reply.status(200).send(updatedTask);
};

export const deleteTask = async (req, reply) => {
  const { boardId, taskId } = req.params;
  const isTaskDeleted = await tasksRepo.deleteTask(boardId, taskId);
  if (!isTaskDeleted) {
    reply.status(404).send(new Error('Task not found'));
  }
  reply.status(204).send();
};
