// s

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
// dotenv.config({
//   path: path.join(__dirname, `../.${process.env.NODE_ENV}.env`),
// });

export const PORT = process.env.PORT || 3333;
// export const {
//   POSTGRES_PORT = 5432,
//   POSTGRES_USER = 'postgres',
//   POSTGRES_PASSWORD = 'postgres',
//   POSTGRES_DB = 'postgres',
//   POSTGRES_HOST = 'localhost',
// } = process.env;
export const { JWT_SECRET_KEY, NODE_ENV } = process.env;
export const AUTH_MODE = process.env.AUTH_MODE === 'true';
export const { LOG_LEVEL } = process.env;
