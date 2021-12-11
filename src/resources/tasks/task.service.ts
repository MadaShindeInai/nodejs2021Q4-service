import { FastifyRequest, FastifyReply } from 'fastify';
import tasksRepo from './task.memory.repository';
import Task from './task.model';

type TaskRequest = FastifyRequest<{
  Body: Task;
  Params: {
    boardId: string;
    taskId: string;
  };
}>;

export const getTasksByBoardId = async (
  req: TaskRequest,
  reply: FastifyReply
) => {
  const tasks = await tasksRepo.getTasksByBoardId(req.params.boardId);
  reply.send(tasks);
};

export const addTask = async (req: TaskRequest, reply: FastifyReply) => {
  const newTask = await tasksRepo.addTask(req.body, req.params.boardId);
  reply.status(201).send(newTask);
};

export const getTaskByBoardAndTaskId = async (
  req: TaskRequest,
  reply: FastifyReply
) => {
  const { boardId, taskId } = req.params;
  const task = await tasksRepo.getTaskByBoardAndTaskId(boardId, taskId);
  if (!task) {
    reply.status(404).send(new Error('Task not found'));
  }
  reply.send(task);
};

export const updateTask = async (req: TaskRequest, reply: FastifyReply) => {
  const { boardId, taskId } = req.params;
  const updatedTask = await tasksRepo.updateTask(boardId, taskId, req.body);
  if (!updatedTask) {
    reply.status(404).send(new Error('Task not found'));
  }
  reply.status(200).send(updatedTask);
};

export const deleteTask = async (req: TaskRequest, reply: FastifyReply) => {
  const { boardId, taskId } = req.params;
  const isTaskDeleted = await tasksRepo.deleteTask(boardId, taskId);
  if (!isTaskDeleted) {
    reply.status(404).send(new Error('Task not found'));
  }
  reply.status(204).send();
};
