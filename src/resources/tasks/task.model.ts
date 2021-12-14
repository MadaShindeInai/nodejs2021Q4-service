import { v4 as uuidv4 } from 'uuid';

/**
 * Task model
 */
class Task {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string | null;

  columnId: string | null;

  constructor({
    id = uuidv4(),
    title = 'New Task',
    order = 1,
    description = 'lol kek cheburek',
    userId = null,
    boardId = null,
    columnId = null,
  }: Task) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

export default Task;
