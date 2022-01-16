import Board from '../boards/board.model';
import Task from './task.model';
import { getRepository } from 'typeorm';

/**
 * Get all tasks from a board by boardId
 * @param boardId - board id
 * @returns array of tasks from a board selected by boardId or empty array
 */
const getTasksByBoardId = async (boardId: Board['id']) => {
  const taskRepo = await getRepository(Task);
  return taskRepo.find({ boardId });
};

/**
 * Get task by taskId from a board selected by boardId
 * @param boardId - board id
 * @param taskId - task id
 * @returns task from a board selected by boardId and taskId or undefined
 */
const getTaskByBoardAndTaskId = async (
  boardId: Board['id'],
  taskId: Task['id']
) => {
  const taskRepo = await getRepository(Task);
  return taskRepo.findOne({ boardId, id: taskId });
};

/**
 * Add a task to a board selected by boardId
 * @param body - task to add
 * @param boardId - board id
 * @returns created task
 */
const addTask = async (body: Omit<Task, 'id'>, boardId: Board['id']) => {
  const taskRepo = await getRepository(Task);
  const newTask = new Task({ ...body, boardId });
  await taskRepo.save(newTask);
  return newTask;
};

/**
 *
 * @param boardId - board id
 * @param taskId - task id
 * @param body - data to update task
 * @returns false if task not found or updated task
 */
const updateTask = async (
  boardId: Board['id'],
  taskId: Task['id'],
  body: Task
) => {
  const taskRepo = await getRepository(Task);
  const targetTask = await taskRepo.findOne({ boardId, id: taskId });
  if (!targetTask) {
    return false;
  }
  const updatedTask = { ...targetTask, ...body };
  await taskRepo.save(updatedTask);
  return updatedTask;
};

/**
 * Delete task by taskId from a board selected by boardId
 * @param boardId - board id
 * @param taskId - task id
 * @returns false if task not found or true if task deleted
 */
const deleteTask = async (boardId: Board['id'], taskId: Task['id']) => {
  const taskRepo = await getRepository(Task);
  const targetTask = await taskRepo.findOne({ boardId, id: taskId });
  if (!targetTask) {
    return false;
  }
  await taskRepo.remove(targetTask);
  return true;
};

export default {
  deleteTask,
  updateTask,
  addTask,
  getTaskByBoardAndTaskId,
  getTasksByBoardId,
};
