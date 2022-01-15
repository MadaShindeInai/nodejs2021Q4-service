import { v4 as uuidv4 } from 'uuid';
import { Entity, Column as TypeORMColumn, PrimaryColumn } from 'typeorm';
import { defaultColumn } from '../constants';

@Entity()
class Column {
  @PrimaryColumn({ type: 'uuid', unique: true })
  readonly id: string;

  @TypeORMColumn()
  title: string;

  @TypeORMColumn()
  order: number;

  @TypeORMColumn()
  boardId?: number;

  constructor(props: Omit<Column, 'id'> = defaultColumn) {
    this.id = uuidv4();
    this.title = props.title;
    this.order = props.order;
  }
}

export default Column;
