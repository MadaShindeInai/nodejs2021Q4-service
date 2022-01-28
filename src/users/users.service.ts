import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}
  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return User.toResponse(user);
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users.map(User.toResponse);
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('No user found');
    }
    return User.toResponse(user);
  }

  async updateUser(id: string, dto: CreateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('No user found');
    }
    const updatedUser = await user.update(dto);
    return User.toResponse(updatedUser);
  }

  async deleteUser(id: string) {
    const user = await this.userRepository.destroy({ where: { id } });
    return user;
  }
}
