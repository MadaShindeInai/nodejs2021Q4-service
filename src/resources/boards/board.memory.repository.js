const { validate } = require('uuid');
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

const updateBoard = async (id, body) => {
  const parsedData = await getDataFromDb();
  const boardToUpdateIdx = parsedData.boards.findIndex(
    (board) => board.id === id
  );
  if (boardToUpdateIdx === -1) {
    return false;
  }
  const updatedColumns = body.columns.map(({ id: colId, ...rest }) => {
    if (validate(colId)) {
      return new Column({ id: colId, ...rest });
    }
    return new Column(rest);
  });

  const updatedBoard = {
    ...parsedData.boards.at(boardToUpdateIdx),
    title: body.title,
    columns: updatedColumns,
  };
  parsedData.boards.splice(boardToUpdateIdx, 1, updatedBoard);

  addToDB(parsedData);
  return updatedBoard;
};

const deleteBoard = async (id) => {
  const parsedData = await getDataFromDb();
  const boardToDeleteIdx = parsedData.boards.findIndex(
    (board) => board.id === id
  );
  if (boardToDeleteIdx === -1) {
    return false;
  }
  parsedData.boards.splice(boardToDeleteIdx, 1);

  addToDB(parsedData);
  return true;
};

module.exports = { getAllBoards, addBoard, getBoard, deleteBoard, updateBoard };
