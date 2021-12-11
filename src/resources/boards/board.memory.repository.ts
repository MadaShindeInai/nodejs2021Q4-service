import { addToDB, getDataFromDb } from '../utils';
import Board from './board.model';
import Column from '../columns/column.model';

const getAllBoards = async () => {
  const parsedData = await getDataFromDb();
  return parsedData.boards;
};

const getBoard = async (boardId: Board['id']) => {
  const boards = await getAllBoards();
  return boards.find((board) => board.id === boardId);
};

const addBoard = async ({ title, columns }: Board) => {
  const parsedData = await getDataFromDb();
  const newColumns = columns.map((column) => new Column(column));
  const newBoard = new Board({ title, columns: newColumns });
  parsedData.boards.push(newBoard);

  addToDB(parsedData);
  return newBoard;
};

const updateBoard = async (boardId: Board['id'], body: Board) => {
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

const deleteBoard = async (boardId: Board['id']) => {
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

export default { getAllBoards, getBoard, addBoard, updateBoard, deleteBoard };
