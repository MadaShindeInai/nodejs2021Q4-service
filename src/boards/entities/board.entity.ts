import { ApiProperty } from '@nestjs/swagger';
import {
  Column as ColumnORM,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { simpleColumnDesc } from 'src/constants';
import { CreateColumnDto } from '../dto/create-column.dto';
import { Column } from './column.entity';

interface BoardCreationAttrs {
  title: string;
  columns: CreateColumnDto[];
}

@Table({ tableName: 'boards', createdAt: false, updatedAt: false })
export class Board extends Model<Board, BoardCreationAttrs> {
  @ApiProperty({
    example: 'b052e834-060b-4a33-b11c-8d431864ea32',
    description: 'Uniq board id',
  })
  @ColumnORM({
    type: DataType.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ApiProperty({
    example: 'ToDo',
    description: 'User tasks',
  })
  @ColumnORM(simpleColumnDesc)
  title: string;

  @ApiProperty({
    example: [],
    description: 'Array of connected columns',
  })
  @HasMany(() => Column, {
    foreignKey: 'boardId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
  columns: Column[];
}
