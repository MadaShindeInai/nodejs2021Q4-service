const { getDataFromDb } = require('../utils');

const getTasksByBoardId = async (boardId) => {
  const parsedData = await getDataFromDb();
  return parsedData.tasks.filter((task) => task.boardId === boardId);
};

// const getUser = async (id) => {
//   const users = await getAll();
//   return users.find((user) => user.id === id);
// };

// const addUser = async (body) => {
//   const parsedData = await getDataFromDb();
//   const newUser = new User(body);
//   parsedData.users.push(newUser);

//   addToDB(parsedData);
//   return newUser;
// };

// const updateUser = async (id, body) => {
//   const parsedData = await getDataFromDb();
//   const userToUpdateIdx = parsedData.users.findIndex((user) => user.id === id);
//   if (userToUpdateIdx === -1) {
//     return false;
//   }
//   const updatedUser = { ...parsedData.users.at(userToUpdateIdx), ...body };
//   parsedData.users.splice(userToUpdateIdx, 1, updatedUser);

//   addToDB(parsedData);
//   return updatedUser;
// };

// const deleteUser = async (id) => {
//   const parsedData = await getDataFromDb();
//   const userToDeleteIdx = parsedData.users.findIndex((user) => user.id === id);
//   if (userToDeleteIdx === -1) {
//     return false;
//   }
//   parsedData.users.splice(userToDeleteIdx, 1);

//   addToDB(parsedData);
//   return true;
// };

module.exports = { getTasksByBoardId };