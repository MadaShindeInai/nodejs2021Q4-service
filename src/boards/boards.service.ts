import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ValidationException } from 'src/exceptions/validation.exception';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';
import { Column } from './entities/column.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel(Board) private boardRepository: typeof Board,
    @InjectModel(Column) private columnRepository: typeof Column
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    const board = await this.boardRepository.create(createBoardDto);
    await Promise.all(
      createBoardDto.columns.map((column) =>
        this.columnRepository.create({ ...column, boardId: board.id })
      )
    );
    const boardWithColumns = await this.boardRepository.findOne({
      where: { id: board.id },
      include: Column,
    });
    return boardWithColumns;
  }

  async findAll() {
    return await this.boardRepository.findAll({
      include: Column,
    });
  }

  async findOne(id: string) {
    const board = await this.boardRepository.findOne({
      where: { id },
      include: Column,
    });
    if (!board) throw new NotFoundException(['No board found']);
    return board;
  }

  // TODO: refactor, to make it more understandable
  async update(id: string, updateBoardDto: UpdateBoardDto) {
    const board = await this.boardRepository.findOne({ where: { id } });
    if (!board) throw new ValidationException(['No board found']);
    const updatedBoard = await board.update({ title: updateBoardDto.title });
    const updatedColumns = await Promise.all(
      updateBoardDto.columns.map(async (column) => {
        if (!column.id) {
          return this.columnRepository.create({
            ...column,
            boardId: board.id,
          });
        } else {
          const columnToUpdate = await this.columnRepository.findOne({
            where: { id: column.id },
          });
          if (!columnToUpdate)
            throw new ValidationException(['No column found']);
          return columnToUpdate.update({ ...columnToUpdate, ...column });
        }
      })
    );
    const updatedColumnsIds = updatedColumns.map((column) => column.id);
    const allColumnsFromDBbyBoardId = await this.columnRepository.findAll({
      where: { boardId: id },
    });
    const columnsToDeleteFromDB = allColumnsFromDBbyBoardId.filter(
      (c) => !updatedColumnsIds.includes(c.id)
    );
    await Promise.all(columnsToDeleteFromDB.map((item) => item.destroy()));
    const updatedBoardWithColumns = await this.boardRepository.findOne({
      where: { id: updatedBoard.id },
      include: Column,
    });
    return updatedBoardWithColumns;
  }

  async remove(id: string) {
    const board = await this.boardRepository.destroy({ where: { id } });
    return board;
  }
}
