import { getRepository } from 'typeorm';
import Board from './board.model';
import Column from '../columns/column.model';

/**
 * Getting all boards from DB
 * @returns array of boards
 */
const getAllBoards = async () => {
  const boardsRepo = await getRepository(Board);
  return boardsRepo.find();
};

/**
 * Getting board by id from DB
 * @param boardId - board id
 * @returns board or undefined
 */
const getBoard = async (boardId: Board['id']) => {
  const boardsRepo = await getRepository(Board);
  return boardsRepo.findOne(boardId);
};

/**
 * Getting board by id from DB
 * @param body - an object with board data to create new board
 * @returns new created board
 */
const addBoard = async ({ title, columns }: Omit<Board, 'id'>) => {
  const boardsRepo = await getRepository(Board);
  const columnsRepo = await getRepository(Column);
  const newBoard = new Board({ title });
  const newColumns =
    columns?.map((column) => new Column(column, newBoard.id)) || [];
  // newBoard.columns = newColumns;
  await boardsRepo.save(newBoard);
  await columnsRepo.save(newColumns);
  const boardWithColumns = await boardsRepo.findOne(newBoard.id);
  return boardWithColumns;
};

/**
 * Updating already existing board
 * @param boardId - board id
 * @param body - an object with board data to update board
 * @returns false if board not found or updated board
 */
const updateBoard = async (boardId: Board['id'], body: Board) => {
  const boardsRepo = await getRepository(Board);
  const targetBoard = await boardsRepo.findOne(boardId);
  if (!targetBoard) {
    return false;
  }
  const updatedBoard = {
    ...targetBoard,
    title: body.title,
    columns: body.columns,
  };
  await boardsRepo.save(updatedBoard);
  return updatedBoard;
};

/**
 * Deleting board by id
 * @param boardId - board id
 * @returns false if board not found, true if board was deleted
 */
const deleteBoard = async (boardId: Board['id']) => {
  const boardsRepo = await getRepository(Board);
  const targetBoard = await boardsRepo.findOne(boardId);
  if (!targetBoard) {
    return false;
  }
  await boardsRepo.remove(targetBoard);
  return true;
};

export default { getAllBoards, getBoard, addBoard, updateBoard, deleteBoard };
