const fs = require('fs');
const { validate } = require('uuid');

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

const validateUUID = (reply, param) => {
  if (!validate(param)) {
    reply.status(400).send(new Error(`${param} is not uuid`));
  }
};

module.exports = {
  addToDB,
  getDataFromDb,
  validateUUID,
};
