import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto {
  @ApiProperty({
    example: 'a688a05a-eb21-4955-8190-639c4a210afb',
    description: 'Id of connected board',
  })
  @IsString({ message: 'Should be a string' })
  readonly id: string;
}
