import Board from '../resources/boards/board.model.mjs';
import Task from '../resources/tasks/task.model.mjs';
import User from '../resources/users/user.model.mjs';

export type DB = {
  users: User[];
  boards: Board[];
  tasks: Task[];
};
