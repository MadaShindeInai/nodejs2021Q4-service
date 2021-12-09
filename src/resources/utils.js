let data = {
  users: [],
  boards: [],
  tasks: [],
};

export const addToDB = (newData) => {
  data = newData;
};

export const getDataFromDb = () => data;
