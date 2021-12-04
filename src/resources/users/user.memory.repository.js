const fs = require('fs');

const getAll = async () => {
  const data = await fs.readFileSync('data.json');
  const { users } = JSON.parse(data);
  return users;
};

const getUser = async (id) => {
  const users = await getAll();
  return users.find((user) => user.id === id);
};

module.exports = { getAll, getUser };
