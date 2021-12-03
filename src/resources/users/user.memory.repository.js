const fs = require('fs');

const getAll = async () => {
  const data = await fs.readFileSync('data.json');
  const { users } = JSON.parse(data);
  return users;
};

module.exports = { getAll };
