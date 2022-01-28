import { ApiProperty } from '@nestjs/swagger';
import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface UserCreationAttrs {
  name: string;
  login: string;
  password: string;
}

const simpleColumnDesc = {
  type: DataType.STRING,
  allowNull: false,
};

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({
    example: 'b052e834-060b-4a33-b11c-8d431864ea32',
    description: 'Uniq user id',
  })
  @Column({
    type: DataType.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ApiProperty({
    example: 'admin',
    description: 'User`s login',
  })
  @Column({ ...simpleColumnDesc, unique: true, defaultValue: DataType.UUIDV4 })
  login: string;

  @Column(simpleColumnDesc)
  password: string;

  @ApiProperty({
    example: 'Dan',
    description: 'User`s name',
  })
  @Column(simpleColumnDesc)
  name: string;

  public static toResponse(user: User): Pick<User, 'id' | 'name' | 'login'> {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
