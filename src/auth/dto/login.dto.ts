import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'admin',
    description: 'User`s login',
  })
  readonly login: string;

  @ApiProperty({
    example: 'admin',
    description: 'User`s password',
  })
  readonly password: string;
}
