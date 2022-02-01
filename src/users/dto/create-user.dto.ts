import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Dan',
    description: 'User`s name',
  })
  @IsString({ message: 'Should be a string' })
  readonly name: string;

  @ApiProperty({
    example: 'admin',
    description: 'User`s login',
  })
  @IsString({ message: 'Should be a string' })
  readonly login: string;

  @ApiProperty({
    example: 'admin',
    description: 'User`s password',
  })
  @IsString({ message: 'Should be a string' })
  @Length(4, 16, { message: 'Should contain 4-16 symbols' })
  readonly password: string;
}
