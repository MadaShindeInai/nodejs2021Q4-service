import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends CreateUserDto {
  @ApiProperty({
    example: 'a688a05a-eb21-4955-8190-639c4a210afb',
    description: 'Id of connected board',
  })
  @IsUUID('4')
  readonly id: string;
}
