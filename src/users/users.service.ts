import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import bcrypt from 'bcryptjs';
import { ValidationException } from 'src/exceptions/validation.exception';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    const isUserAlreadyExists = await this.getUserByLogin(dto.login);
    if (isUserAlreadyExists)
      throw new ValidationException(['User with such login already exists']);
    const hashPassword = await bcrypt.hash(dto.password, 10);
    const user = await this.userRepository.create({
      ...dto,
      password: hashPassword,
    });
    return User.toResponse(user);
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users.map(User.toResponse);
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('No user found');
    return User.toResponse(user);
  }

  async updateUser(id: string, dto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('No user found');
    const hashPassword = await bcrypt.hash(dto.password, 10);
    const updatedUser = await user.update({
      ...dto,
      password: hashPassword,
    });
    return User.toResponse(updatedUser);
  }

  async deleteUser(id: string) {
    const user = await this.userRepository.destroy({
      where: { id },
    });
    return user;
  }

  async getUserByLogin(login: string) {
    const user = await this.userRepository.findOne({ where: { login } });
    return user;
  }
}
