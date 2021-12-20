import Board from '../boards/board.model';
import Task from './task.model';
import { getDataFromDb, addToDB } from '../utils';

/**
 * Get all tasks from a board by boardId
 * @param boardId - board id
 * @returns array of tasks from a board selected by boardId or empty array
 */
const getTasksByBoardId = async (boardId: Board['id']) => {
  const parsedData = await getDataFromDb();
  return parsedData.tasks.filter((task) => task.boardId === boardId);
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
  const parsedData = await getDataFromDb();
  return parsedData.tasks.find(
    (task) => task.id === taskId && task.boardId === boardId
  );
};

/**
 * Add a task to a board selected by boardId
 * @param body - task to add
 * @param boardId - board id
 * @returns created task
 */
const addTask = async (body: Omit<Task, 'id'>, boardId: Board['id']) => {
  const parsedData = await getDataFromDb();
  const newTask = new Task({ ...body, boardId });
  parsedData.tasks.push(newTask);

  addToDB(parsedData);
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
  const parsedData = await getDataFromDb();
  const taskToUpdateIdx = parsedData.tasks.findIndex(
    (task) => task.id === taskId && task.boardId === boardId
  );
  if (taskToUpdateIdx === -1) {
    return false;
  }
  const updatedTask = { ...parsedData.users.at(taskToUpdateIdx), ...body };
  parsedData.tasks.splice(taskToUpdateIdx, 1, updatedTask);

  addToDB(parsedData);
  return updatedTask;
};

/**
 * Delete task by taskId from a board selected by boardId
 * @param boardId - board id
 * @param taskId - task id
 * @returns false if task not found or true if task deleted
 */
const deleteTask = async (boardId: Board['id'], taskId: Task['id']) => {
  const parsedData = await getDataFromDb();
  const taskToDeleteIdx = parsedData.tasks.findIndex(
    (task) => task.id === taskId && task.boardId === boardId
  );
  if (taskToDeleteIdx === -1) {
    return false;
  }
  parsedData.tasks.splice(taskToDeleteIdx, 1);

  addToDB(parsedData);
  return true;
};

export default {
  deleteTask,
  updateTask,
  addTask,
  getTaskByBoardAndTaskId,
  getTasksByBoardId,
};
