import { getDataFromDb, addToDB } from '../utils';
import Task from './task.model';

const getTasksByBoardId = async (boardId) => {
  const parsedData = await getDataFromDb();
  return parsedData.tasks.filter((task) => task.boardId === boardId);
};

const getTaskByBoardAndTaskId = async (boardId, taskId) => {
  const parsedData = await getDataFromDb();
  return parsedData.tasks.find(
    (task) => task.id === taskId && task.boardId === boardId
  );
};

const addTask = async (body, boardId) => {
  const parsedData = await getDataFromDb();
  const newTask = new Task({ ...body, boardId });
  parsedData.tasks.push(newTask);

  addToDB(parsedData);
  return newTask;
};

const updateTask = async (boardId, taskId, body) => {
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

const deleteTask = async (boardId, taskId) => {
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
