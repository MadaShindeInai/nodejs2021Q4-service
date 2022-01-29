import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryColumn } from 'typeorm';
import { defaultUser } from '../constants';

@Entity()
class User {
  @PrimaryColumn({ type: 'uuid', unique: true })
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  login: string;

  @Column()
  password: string;

  constructor(props: Omit<User, 'id'> = defaultUser) {
    this.id = uuidv4();
    this.name = props.name;
    this.login = props.login;
    this.password = props.password;
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
