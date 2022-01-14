import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
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
