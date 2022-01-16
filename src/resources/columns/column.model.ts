import { v4 as uuidv4 } from 'uuid';
import {
  Entity,
  Column as TypeORMColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { defaultColumn } from '../constants';
import Board from '../boards/board.model';

@Entity()
class Column {
  @PrimaryColumn({ type: 'uuid', unique: true })
  readonly id: string;

  @TypeORMColumn()
  title: string;

  @TypeORMColumn()
  order: number;

  @ManyToOne(() => Board, (board) => board.id, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'boardId' })
  boardId: string | null;

  constructor(props: Omit<Column, 'id'> = defaultColumn) {
    this.id = uuidv4();
    this.title = props.title;
    this.order = props.order;
    this.boardId = props.boardId;
  }
}

export default Column;
