import { ApiProperty } from '@nestjs/swagger';
import {
  DataType,
  Model,
  Table,
  Column as ColumnORM,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { simpleColumnDesc } from 'src/constants';
import { Board } from './board.entity';

export interface ColumnCreationAttrs {
  title: string;
  order: number;
  boardId: string | null;
}

@Table({ tableName: 'columns', createdAt: false, updatedAt: false })
export class Column extends Model<Column, ColumnCreationAttrs> {
  @ApiProperty({
    example: 'b052e834-060b-4a33-b11c-8d431864ea32',
    description: 'Uniq column id',
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
    description: 'Column title',
  })
  @ColumnORM(simpleColumnDesc)
  title: string;

  @ApiProperty({
    example: 1,
    description: 'Column`s order',
  })
  @ColumnORM({ type: DataType.INTEGER, allowNull: false })
  order: number;

  @BelongsTo(() => Board, 'boardId')
  board: Board;

  @ApiProperty({
    example: null,
    description: 'Board`s id',
  })
  @ForeignKey(() => Board)
  boardId: string | null;
}
