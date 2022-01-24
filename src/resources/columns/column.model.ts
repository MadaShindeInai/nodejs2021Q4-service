import { v4 as uuidv4 } from 'uuid';
import {
  Entity,
  Column as TypeORMColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { defaultColumn } from '../constants';
// eslint-disable-next-line import/no-cycle
import Board from '../boards/board.model';

@Entity()
class Column {
  @PrimaryColumn({ type: 'uuid', unique: true })
  readonly id: string;

  @TypeORMColumn()
  title: string;

  @TypeORMColumn()
  order: number;

  @ManyToOne(() => Board, (board) => board.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'boardId' })
  boardId: string | null;

  constructor(
    props: Omit<Column, 'id'> = defaultColumn,
    boardId: Column['boardId'] = null
  ) {
    this.id = uuidv4();
    this.title = props.title;
    this.order = props.order;
    this.boardId = boardId;
  }
}

export default Column;
