import { v4 as uuidv4 } from 'uuid';

/**
 * Task model
 */
class Task {
  readonly id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string | null;

  columnId: string | null;

  constructor({
    title = 'New Task',
    order = 1,
    description = 'lol kek cheburek',
    userId = null,
    boardId = null,
    columnId = null,
  }: Omit<Task, 'id'>) {
    this.id = uuidv4();
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

export default Task;
