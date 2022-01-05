import { v4 as uuidv4 } from 'uuid';

/**
 * Column model
 */
class Column {
  readonly id: string;

  title: string;

  order: number;

  constructor({ title = 'Column1', order = 0 }: Omit<Column, 'id'>) {
    this.id = uuidv4();
    this.title = title;
    this.order = order;
  }
}

export default Column;
