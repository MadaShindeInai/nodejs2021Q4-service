import { DB } from '../types';

let data: DB = {
  // users: [{ name: 'lol', password: 'kek', id: '1', login: 'kp9' }],
  users: [],
  boards: [],
  tasks: [],
};
/**
 * Rewriting the data in the DB
 * @param newData - updated DB object
 * @returns undefined
 */
export const addToDB = (newData: DB) => {
  data = newData;
};

/**
 * Function that returns in memory DB object
 * @returns the DB object
 */
export const getDataFromDb = (): DB => data;
