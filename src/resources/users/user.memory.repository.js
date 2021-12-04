const fs = require('fs');
const User = require('./user.model');

const getAll = async () => {
  const data = await fs.readFileSync('data.json');
  const { users } = JSON.parse(data);
  return users;
};

const getUser = async (id) => {
  const users = await getAll();
  return users.find((user) => user.id === id);
};

const addUser = async (body) => {
  const data = await fs.readFileSync('data.json');
  const parsedData = JSON.parse(data);
  parsedData.users.push(new User(body));

  fs.writeFile('./data.json', JSON.stringify(parsedData, null, '\t'), (err) => {
    if (err) {
      return { message: 'could not persist data!' };
    }
    return { message: 'user added successfully!' };
  });
};

module.exports = { getAll, getUser, addUser };
