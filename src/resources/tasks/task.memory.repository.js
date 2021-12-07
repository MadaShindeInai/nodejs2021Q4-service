const { getDataFromDb, addToDB } = require('../utils');
const Task = require('./task.model');

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

const addTask = async (body) => {
  const parsedData = await getDataFromDb();
  const newTask = new Task(body);
  parsedData.tasks.push(newTask);

  addToDB(parsedData);
  return newTask;
};

// const updateUser = async (id, body) => {
//   const parsedData = await getDataFromDb();
//   const userToUpdateIdx = parsedData.users.findIndex((user) => user.id === id);
//   if (userToUpdateIdx === -1) {
//     return false;
//   }
//   const updatedUser = { ...parsedData.users.at(userToUpdateIdx), ...body };
//   parsedData.users.splice(userToUpdateIdx, 1, updatedUser);

//   addToDB(parsedData);
//   return updatedUser;
// };

// const deleteUser = async (id) => {
//   const parsedData = await getDataFromDb();
//   const userToDeleteIdx = parsedData.users.findIndex((user) => user.id === id);
//   if (userToDeleteIdx === -1) {
//     return false;
//   }
//   parsedData.users.splice(userToDeleteIdx, 1);

//   addToDB(parsedData);
//   return true;
// };

module.exports = { getTasksByBoardId, addTask, getTaskByBoardAndTaskId };
