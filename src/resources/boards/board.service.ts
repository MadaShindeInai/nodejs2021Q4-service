import { FastifyReply, FastifyRequest } from 'fastify';
import boardsRepo from './board.memory.repository';
import Board from './board.model';

type BoardRequest = FastifyRequest<{
  Body: Board;
  Params: {
    boardId: string;
  };
}>;

export const getAllBoards = async (_: FastifyRequest, reply: FastifyReply) => {
  const boards = await boardsRepo.getAllBoards();
  reply.send(boards);
};

export const getBoard = async (req: BoardRequest, reply: FastifyReply) => {
  const board = await boardsRepo.getBoard(req.params.boardId);
  if (!board) {
    reply.status(404).send(new Error('Board not found'));
  }
  reply.send(board);
};

export const addBoard = async (req: BoardRequest, reply: FastifyReply) => {
  const newBoard = await boardsRepo.addBoard(req.body);
  reply.status(201).send(newBoard);
};

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

export const deleteBoard = async (req: BoardRequest, reply: FastifyReply) => {
  await boardsRepo.deleteBoard(req.params.boardId);
  reply.status(204).send();
};
