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
type TaskCreate = FastifyRequest<{
  Body: Omit<Task, 'id'>;
  Params: {
    boardId: string;
    taskId: string;
  };
}>;

/**
 * Fastify middleware to get all tasks from a board by boardId
 * @param req - fastify request
 * @param reply - fastify reply
 */
export const getTasksByBoardId = async (
  req: TaskRequest,
  reply: FastifyReply
) => {
  const tasks = await tasksRepo.getTasksByBoardId(req.params.boardId);
  reply.send(tasks);
};

/**
 * Fastify middleware add a task to a board
 * @param req - fastify request
 * @param reply - fastify reply
 */
export const addTask = async (req: TaskCreate, reply: FastifyReply) => {
  const newTask = await tasksRepo.addTask(req.body, req.params.boardId);
  reply.status(201).send(newTask);
};

/**
 * Fastify middleware to get a task by boardId and taskId
 * @param req - fastify request
 * @param reply - fastify reply
 */
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

/**
 * Fastify middleware to update a task
 * @param req - fastify request
 * @param reply - fastify reply
 */
export const updateTask = async (req: TaskRequest, reply: FastifyReply) => {
  const { boardId, taskId } = req.params;
  const updatedTask = await tasksRepo.updateTask(boardId, taskId, req.body);
  if (!updatedTask) {
    reply.status(404).send(new Error('Task not found'));
  }
  reply.status(200).send(updatedTask);
};

/**
 * Fastify middleware to delete a task
 * @param req - fastify request
 * @param reply - fastify reply
 */
export const deleteTask = async (req: TaskRequest, reply: FastifyReply) => {
  const { boardId, taskId } = req.params;
  const isTaskDeleted = await tasksRepo.deleteTask(boardId, taskId);
  if (!isTaskDeleted) {
    reply.status(404).send(new Error('Task not found'));
  }
  reply.status(204).send();
};
