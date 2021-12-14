import dotenv from 'dotenv';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export const PORT = process.env.PORT || 4000;
export const { NODE_ENV } = process.env;
export const { MONGO_CONNECTION_STRING } = process.env;
export const { JWT_SECRET_KEY } = process.env;
export const AUTH_MODE = process.env.AUTH_MODE === 'true';
