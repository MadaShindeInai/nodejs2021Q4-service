import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class LoginDto {
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
