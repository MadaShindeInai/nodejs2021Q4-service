import { v4 as uuidv4 } from 'uuid';

class Board {
  constructor({ id = uuidv4(), title = 'Board1', columns } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export default Board;
