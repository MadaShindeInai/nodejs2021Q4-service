import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Dan',
    description: 'User`s name',
  })
  readonly name: string;

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
