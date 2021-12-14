import { v4 as uuidv4 } from 'uuid';
import Column from '../columns/column.model';

/**
 * Board model
 */
class Board {
  id?: string;

  title: string;

  columns: Column[];

  constructor({ id = uuidv4(), title = 'Board1', columns }: Board) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export default Board;
