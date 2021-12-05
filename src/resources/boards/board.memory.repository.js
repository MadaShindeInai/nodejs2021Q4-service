const { addToDB, getDataFromDb } = require('../utils');
const Board = require('./board.model');
const Column = require('../columns/column.model');

const getAllBoards = async () => {
  const parsedData = await getDataFromDb();
  return parsedData.boards;
};

const getBoard = async (id) => {
  const users = await getAllBoards();
  return users.find((user) => user.id === id);
};

const addBoard = async ({ title, columns }) => {
  const parsedData = await getDataFromDb();
  const newColumns = columns.map((column) => new Column(column));
  const newBoard = new Board({ title, columns: newColumns });
  parsedData.boards.push(newBoard);

  addToDB(parsedData);
  return newBoard;
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

module.exports = { getAllBoards, addBoard, getBoard };
