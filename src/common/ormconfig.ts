import {
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from './config';

export const ormConfig = {
  type: 'postgres',
  host: '172.18.0.2',
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: [
    'src/resources/users/user.model.ts',
    'src/resources/columns/column.model.ts',
    'src/resources/boards/board.model.ts',
    'src/resources/tasks/task.model.ts',
  ],
};
