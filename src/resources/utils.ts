import { DB } from '../types';

let data: DB = {
  users: [],
  boards: [],
  tasks: [],
};

export const addToDB = (newData: DB) => {
  data = newData;
};

export const getDataFromDb = () => data;
