let data = require('../../data');

const addToDB = (newData) => {
  data = newData;
};

const getDataFromDb = () => data;

module.exports = {
  addToDB,
  getDataFromDb,
};
