import { v4 as uuidv4 } from 'uuid';
import Column from '../columns/column.model';

/**
 * Board model
 */
class Board {
  readonly id: string;

  title: string;

  columns: Column[];

  constructor({ title = 'Board1', columns }: Omit<Board, 'id'>) {
    this.id = uuidv4();
    this.title = title;
    this.columns = columns;
  }
}

export default Board;
