import { FastifyReply, FastifyRequest } from 'fastify';
import boardsRepo from './board.memory.repository';
import Board from './board.model';

type BoardRequest = FastifyRequest<{
  Body: Board;
  Params: {
    boardId: string;
  };
}>;
type BoardCreate = FastifyRequest<{
  Body: Omit<Board, 'id'>;
  Params: {
    boardId: string;
  };
}>;
/**
 * Fastify middleware to get all boards from DB
 * @param _ - fastify request
 * @param reply - fastify reply
 */
export const getAllBoards = async (_: FastifyRequest, reply: FastifyReply) => {
  const boards = await boardsRepo.getAllBoards();
  reply.send(boards);
};

/**
 * Fastify middleware to get board by id from DB
 * @param req - fastify request
 * @param reply - fastify reply
 */
export const getBoard = async (req: BoardRequest, reply: FastifyReply) => {
  const board = await boardsRepo.getBoard(req.params.boardId);
  if (!board) {
    reply.status(404).send(new Error('Board not found'));
  }
  reply.send(board);
};

/**
 * Fastify middleware to add new board to DB
 * @param req - fastify request
 * @param reply - fastify reply
 */
export const addBoard = async (req: BoardCreate, reply: FastifyReply) => {
  const newBoard = await boardsRepo.addBoard(req.body);
  reply.status(201).send(newBoard);
};

/**
 * Fastify middleware to update already existing board in DB
 * @param req - fastify request
 * @param reply - fastify reply
 */
export const updateBoard = async (req: BoardRequest, reply: FastifyReply) => {
  const updatedBoard = await boardsRepo.updateBoard(
    req.params.boardId,
    req.body
  );
  if (!updatedBoard) {
    reply.status(404).send(new Error('Board not found'));
  }
  reply.status(200).send(updatedBoard);
};

/**
 * Fastify middleware to delete board from DB
 * @param req - fastify request
 * @param reply - fastify reply
 */
export const deleteBoard = async (req: BoardRequest, reply: FastifyReply) => {
  await boardsRepo.deleteBoard(req.params.boardId);
  reply.status(204).send();
};
