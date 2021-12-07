let data = require('../../data');

const addToDB = (newData) => {
  data = newData;
  console.log(newData);
};

const getDataFromDb = () => data;

module.exports = {
  addToDB,
  getDataFromDb,
};
