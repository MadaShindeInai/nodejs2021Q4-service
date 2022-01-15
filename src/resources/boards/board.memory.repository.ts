import { addToDB, getDataFromDb } from '../utils';
import Board from './board.model';
import Column from '../columns/column.model';

/**
 * Getting all boards from DB
 * @returns array of boards
 */
const getAllBoards = async () => {
  const parsedData = await getDataFromDb();
  return parsedData.boards;
};

/**
 * Getting board by id from DB
 * @param boardId - board id
 * @returns board or undefined
 */
const getBoard = async (boardId: Board['id']) => {
  const boards = await getAllBoards();
  return boards.find((board) => board.id === boardId);
};

/**
 * Getting board by id from DB
 * @param body - an object with board data to create new board
 * @returns new created board
 */
const addBoard = async ({ title, columns }: Omit<Board, 'id'>) => {
  const parsedData = await getDataFromDb();
  const newColumns = columns?.map((column) => new Column(column));
  const newBoard = new Board({ title, columns: newColumns });
  parsedData.boards.push(newBoard);

  addToDB(parsedData);
  return newBoard;
};

/**
 * Updating already existing board
 * @param boardId - board id
 * @param body - an object with board data to update board
 * @returns false if board not found or updated board
 */
const updateBoard = async (boardId: Board['id'], body: Board) => {
  const parsedData = await getDataFromDb();
  const boardToUpdateIdx = parsedData.boards.findIndex(
    (board) => board.id === boardId
  );

  if (boardToUpdateIdx === -1) {
    return false;
  }
  const qqq = parsedData.boards[boardToUpdateIdx];

  const updatedBoard = {
    ...qqq,
    title: body.title,
    columns: body.columns,
  };

  parsedData.boards.splice(boardToUpdateIdx, 1, updatedBoard);

  addToDB(parsedData);
  return updatedBoard;
};

/**
 * Deleting board by id
 * @param boardId - board id
 * @returns false if board not found, true if board was deleted
 */
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
  return true;
};

export default { getAllBoards, getBoard, addBoard, updateBoard, deleteBoard };
