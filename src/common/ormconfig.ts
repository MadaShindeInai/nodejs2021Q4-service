import {
  POSTGRES_DB,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from './config';

const ormConfig = {
  type: 'postgres',
  host: 'localhost',
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
  logging: false,
  cache: false,
  entities: ['src/resources/**/*.model.ts'],
  migrations: ['src/common/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/common/migrations',
  },
};

export default ormConfig;
