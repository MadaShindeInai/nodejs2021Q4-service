import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'User creation' })
  @ApiResponse({ status: 201, type: User })
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(AuthGuard)
  @Get(':id')
  getById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() userDto: CreateUserDto) {
    return this.userService.updateUser(id, userDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 204, type: User })
  @UseGuards(AuthGuard)
  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
