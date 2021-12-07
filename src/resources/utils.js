const fs = require('fs');

const addToDB = async (data) => {
  await fs.writeFile('./data.json', JSON.stringify(data, null, '\t'), (err) => {
    if (err) {
      process.stderr.write(`Can't write to data.json`);
    }
    process.stdin.write(`Successfully edited`);
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
