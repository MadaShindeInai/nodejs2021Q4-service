import { addToDB, getDataFromDb } from '../utils';
import User from './user.model';

/**
 * Get all users function
 * @returns User[]
 */
const getAll = async () => {
  const parsedData = await getDataFromDb();
  return parsedData.users;
};

/**
 * Get user by id function
 * @param id - user id
 * @returns User or undefined
 */
const getUser = async (id: string) => {
  const users = await getAll();
  return users.find((user) => user.id === id);
};

/**
 * Add user function
 * @param body - user object
 * @returns new created user
 */
const addUser = async (body: User) => {
  const parsedData = await getDataFromDb();
  const newUser = new User(body);
  parsedData.users.push(newUser);

  addToDB(parsedData);
  return newUser;
};

/**
 * Update user function
 * @param id - user id
 * @param body - data to update user
 * @returns false if user not found or updated user
 */
const updateUser = async (id: string, body: User) => {
  const parsedData = await getDataFromDb();
  const userToUpdateIdx = parsedData.users.findIndex((user) => user.id === id);
  if (userToUpdateIdx === -1) {
    return false;
  }
  const updatedUser = { ...parsedData.users.at(userToUpdateIdx), ...body };
  parsedData.users.splice(userToUpdateIdx, 1, updatedUser);

  addToDB(parsedData);
  return updatedUser;
};

/**
 * Delete user function
 * @param id - user id
 * @returns false if user not found or true if user deleted
 */
const deleteUser = async (id: string) => {
  const parsedData = await getDataFromDb();
  const userToDeleteIdx = parsedData.users.findIndex((user) => user.id === id);
  if (userToDeleteIdx === -1) {
    return false;
  }

  const tasksWithRemovedUser = parsedData.tasks.map((task) => {
    if (task.userId === id) {
      return { ...task, userId: null };
    }
    return task;
  });

  parsedData.tasks = tasksWithRemovedUser;
  parsedData.users.splice(userToDeleteIdx, 1);
  addToDB(parsedData);
  return true;
};

export default { getAll, deleteUser, getUser, addUser, updateUser };
