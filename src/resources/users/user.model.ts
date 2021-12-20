import { v4 as uuidv4 } from 'uuid';

/**
 * User model
 */
class User {
  readonly id: string;

  name: string;

  login: string;

  password: string;

  constructor({
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  }: Omit<User, 'id'>) {
    this.id = uuidv4();
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Function to remove password from user data
   * @param user - user object
   * @returns user without password
   */
  public static toResponse(user: User): Omit<User, 'password'> {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
