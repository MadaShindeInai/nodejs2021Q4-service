import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}
  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto);
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { id: user.id, login: user.login };
    return { token: this.jwtService.sign(payload) };
  }

  private async validateUser(loginDto: LoginDto) {
    const user = await this.usersService.getUserByLogin(loginDto.login);
    if (!user) {
      throw new HttpException(
        'Incorrect pair login/password',
        HttpStatus.FORBIDDEN
      );
    }
    const passwordEquals = await bcrypt.compare(
      loginDto.password,
      user.password
    );
    if (passwordEquals) return user;
    throw new HttpException(
      'Incorrect pair login/password',
      HttpStatus.FORBIDDEN
    );
  }
}
