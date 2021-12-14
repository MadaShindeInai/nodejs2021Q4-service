const boardsRepo = require('./board.memory.repository');

const getAllBoards = async (req, reply) => {
  const boards = await boardsRepo.getAllBoards();
  reply.send(boards);
};

const getBoard = async (req, reply) => {
  const board = await boardsRepo.getBoard(req.params.boardId);
  if (!board) {
    reply.status(404).send(new Error('Board not found'));
  }
  reply.send(board);
};

const addBoard = async (req, reply) => {
  const newBoard = await boardsRepo.addBoard(req.body);
  reply.status(201).send(newBoard);
};

const updateBoard = async (req, reply) => {
  const updatedBoard = await boardsRepo.updateBoard(
    req.params.boardId,
    req.body
  );
  if (!updatedBoard) {
    reply.status(404).send(new Error('Board not found'));
  }
  reply.status(200).send(updatedBoard);
};

const deleteBoard = async (req, reply) => {
  await boardsRepo.deleteBoard(req.params.boardId);
  reply.status(204).send();
};

module.exports = { getAllBoards, addBoard, getBoard, deleteBoard, updateBoard };
