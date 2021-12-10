import { v4 as uuidv4 } from 'uuid';

class Column {
  constructor({ id = uuidv4(), title = 'Column1', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

export default Column;