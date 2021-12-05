const { validate } = require('uuid');
const boardsRepo = require('./board.memory.repository');

const getAllBoards = async (req, reply) => {
  const boards = await boardsRepo.getAllBoards();
  reply.send(boards);
};

const getBoard = async (req, reply) => {
  if (!validate(req.params.boardId)) {
    return reply
      .status(400)
      .send(new Error(`${req.params.boardId} is not uuid`));
  }
  const board = await boardsRepo.getBoard(req.params.boardId);
  if (!board) {
    return reply.status(404).send(new Error('Board not found'));
  }
  return reply.send(board);
};

const addBoard = async (req, reply) => {
  const newBoard = await boardsRepo.addBoard(req.body);

  return reply.status(201).send(newBoard);
};

const updateBoard = async (req, reply) => {
  if (!validate(req.params.boardId)) {
    return reply
      .status(400)
      .send(new Error(`${req.params.boardId} is not uuid`));
  }
  const updatedBoard = await boardsRepo.updateBoard(
    req.params.boardId,
    req.body
  );
  if (!updatedBoard) {
    return reply.status(404).send(new Error('Board not found'));
  }
  return reply.status(200).send(updatedBoard);
};

const deleteBoard = async (req, reply) => {
  if (!validate(req.params.boardId)) {
    return reply
      .status(400)
      .send(new Error(`${req.params.boardId} is not uuid`));
  }
  const updatedUser = await boardsRepo.deleteBoard(req.params.boardId);
  if (!updatedUser) {
    return reply.status(404).send(new Error('Board not found'));
  }
  return reply.status(204).send();
};

module.exports = { getAllBoards, addBoard, getBoard, deleteBoard, updateBoard };
