import { v4 as uuidv4 } from 'uuid';
import { Entity, Column as ORMColumn, PrimaryColumn, OneToMany } from 'typeorm';
import Column from '../columns/column.model';

@Entity()
class Board {
  @PrimaryColumn({ type: 'uuid', unique: true })
  readonly id: string;

  @ORMColumn()
  title: string;

  @OneToMany(() => Column, (column) => column.boardId, { eager: true })
  columns?: Column[];

  constructor(props: Omit<Board, 'id'> = { title: 'Board1' }) {
    this.id = uuidv4();
    this.title = props.title;
    this.columns = props.columns;
  }
}

export default Board;
