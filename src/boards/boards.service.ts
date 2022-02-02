import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
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
    if (!board) {
      throw new HttpException('No board found', HttpStatus.BAD_REQUEST);
    }
    return board;
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  async remove(id: string) {
    const board = await this.boardRepository.destroy({ where: { id } });
    return board;
  }
}
