import { v4 as uuidv4 } from 'uuid';

/**
 * Column model
 */
class Column {
  id?: string;

  title: string;

  order: number;

  constructor({ id = uuidv4(), title = 'Column1', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

export default Column;
