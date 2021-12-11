import Board from '../resources/boards/board.model';
import Task from '../resources/tasks/task.model';
import User from '../resources/users/user.model';

export type DB = {
  users: User[];
  boards: Board[];
  tasks: Task[];
};
