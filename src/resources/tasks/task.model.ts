import { v4 as uuidv4 } from 'uuid';
import {
  Entity,
  Column as ORMColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { defaultTask } from '../constants';
import User from '../users/user.model';
import Board from '../boards/board.model';
import Column from '../columns/column.model';

@Entity()
class Task {
  @PrimaryColumn({ type: 'uuid', unique: true })
  readonly id: string;

  @ORMColumn()
  title: string;

  @ORMColumn()
  order: number;

  @ORMColumn('text')
  description: string;

  @ManyToOne(() => User, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'userId' })
  userId: string | null;

  @ManyToOne(() => Board, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'boardId' })
  boardId: string | null;

  @ManyToOne(() => Column, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'columnId' })
  columnId: string | null;

  constructor(props: Omit<Task, 'id'> = defaultTask) {
    this.id = uuidv4();
    this.title = props.title;
    this.order = props.order;
    this.description = props.description;
    this.userId = props.userId;
    this.boardId = props.boardId;
    this.columnId = props.columnId;
  }
}

export default Task;
