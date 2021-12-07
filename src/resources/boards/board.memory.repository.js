const { addToDB, getDataFromDb } = require('../utils');
const Board = require('./board.model');
const Column = require('../columns/column.model');

const getAllBoards = async () => {
  const parsedData = await getDataFromDb();
  return parsedData.boards;
};

const getBoard = async (boardId) => {
  const boards = await getAllBoards();
  return boards.find((board) => board.id === boardId);
};

const addBoard = async ({ title, columns }) => {
  const parsedData = await getDataFromDb();
  const newColumns = columns.map((column) => new Column(column));
  const newBoard = new Board({ title, columns: newColumns });
  parsedData.boards.push(newBoard);

  addToDB(parsedData);
  return newBoard;
};

const updateBoard = async (boardId, body) => {
  const parsedData = await getDataFromDb();
  const boardToUpdateIdx = parsedData.boards.findIndex(
    (board) => board.id === boardId
  );
  if (boardToUpdateIdx === -1) {
    return false;
  }

  const updatedBoard = {
    ...parsedData.boards.at(boardToUpdateIdx),
    title: body.title,
    columns: body.columns,
  };

  parsedData.boards.splice(boardToUpdateIdx, 1, updatedBoard);

  addToDB(parsedData);
  return updatedBoard;
};

const deleteBoard = async (boardId) => {
  const parsedData = await getDataFromDb();
  const boardToDeleteIdx = parsedData.boards.findIndex(
    (board) => board.id === boardId
  );
  if (boardToDeleteIdx === -1) {
    return false;
  }
  const tasksFilteredByBoardId = parsedData.tasks.filter(
    (task) => task.boardId !== boardId
  );

  parsedData.tasks = tasksFilteredByBoardId;
  parsedData.boards.splice(boardToDeleteIdx, 1);
  addToDB(parsedData);
  return false;
};

module.exports = { getAllBoards, addBoard, getBoard, deleteBoard, updateBoard };
