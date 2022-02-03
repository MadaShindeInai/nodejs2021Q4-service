import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column as ColumnORM,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Board } from 'src/boards/entities/board.entity';
import { Column } from 'src/boards/entities/column.entity';
import { simpleColumnDesc } from 'src/constants';
import { User } from 'src/users/entities/user.entity';

interface TaskCreationAttrs {
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string | null;
  columnId: string | null;
}

@Table({ tableName: 'tasks', createdAt: false, updatedAt: false })
export class Task extends Model<Task, TaskCreationAttrs> {
  @ApiProperty({
    example: 'b052e834-060b-4a33-b11c-8d431864ea32',
    description: 'Uniq task id',
  })
  @ColumnORM({
    type: DataType.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ApiProperty({
    example: 'Training',
    description: 'Task title',
  })
  @ColumnORM(simpleColumnDesc)
  title: string;

  @ApiProperty({
    example: 'Training',
    description: 'Task title',
  })
  @ColumnORM({ type: DataType.INTEGER, allowNull: false })
  order: number;

  @ApiProperty({
    example: 'Go to gym at 8PM tomorrow',
    description: 'Task description',
  })
  @ColumnORM(simpleColumnDesc)
  description: string;

  @BelongsTo(() => Board, { foreignKey: 'boardId', onDelete: 'CASCADE' })
  board: Board;

  @ApiProperty({
    example: null,
    description: 'Board`s id',
  })
  @ForeignKey(() => Board)
  @ColumnORM({ type: DataType.UUID, allowNull: true })
  boardId: string | null;

  @ApiProperty({
    example: null,
    description: 'Column`s id',
  })
  @ForeignKey(() => Column)
  @ColumnORM({ type: DataType.UUID, allowNull: true })
  columnId: string | null;

  @BelongsTo(() => User, { foreignKey: 'userId', onDelete: 'SET NULL' })
  user: User;

  @ApiProperty({
    example: null,
    description: 'User`s id',
  })
  @ForeignKey(() => User)
  @ColumnORM({ type: DataType.UUID, allowNull: true })
  userId: string | null;
}
