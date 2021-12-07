const fs = require('fs');

const addToDB = (data) => {
  fs.writeFile('./data.json', JSON.stringify(data, null, '\t'), (err) => {
    if (err) {
      return { message: 'could not persist data!' };
    }
    return { message: 'user added successfully!' };
  });
};

const getDataFromDb = async () => {
  const data = await fs.readFileSync('data.json');
  return JSON.parse(data);
};

module.exports = {
  addToDB,
  getDataFromDb,
};
