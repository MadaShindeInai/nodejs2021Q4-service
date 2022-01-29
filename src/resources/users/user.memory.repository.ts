import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import User from './user.model';
import { SALT } from '../constants';

/**
 * Get all users function
 * @returns User[]
 */
const getAll = async () => {
  const userRepo = await getRepository(User);
  return userRepo.find();
};

/**
 * Get user by id function
 * @param id - user id
 * @returns User or undefined
 */
const getUser = async (id: User['id']) => {
  const userRepo = await getRepository(User);
  return userRepo.findOne(id);
};

/**
 * Add user function
 * @param body - user object
 * @returns new created user
 */
const addUser = async (body: Omit<User, 'id'>) => {
  const userRepo = await getRepository(User);
  const newUser = new User({
    ...body,
    password: bcrypt.hashSync(body.password, SALT),
  });
  await userRepo.save(newUser);
  return newUser;
};

/**
 * Update user function
 * @param id - user id
 * @param body - data to update user
 * @returns false if user not found or updated user
 */
const updateUser = async (id: User['id'], body: User) => {
  const userRepo = await getRepository(User);
  const targetUser = await userRepo.findOne(id);
  if (!targetUser) {
    return false;
  }
  const bodyWithHashedPassword = body.password
    ? { ...body, password: bcrypt.hashSync(body.password, SALT) }
    : body;
  const updatedUser = { ...targetUser, ...bodyWithHashedPassword };
  await userRepo.save(updatedUser);
  return updatedUser;
};

/**
 * Delete user function
 * @param id - user id
 * @returns false if user not found or true if user deleted
 */
const deleteUser = async (id: User['id']) => {
  const userRepo = await getRepository(User);
  const targetUser = await userRepo.findOne(id);
  if (!targetUser) {
    return false;
  }
  await userRepo.remove(targetUser);
  return true;
};

export default { getAll, deleteUser, getUser, addUser, updateUser };
