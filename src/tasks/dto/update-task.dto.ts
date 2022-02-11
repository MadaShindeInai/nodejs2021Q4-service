import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends CreateTaskDto {
  @ApiProperty({
    example: 'a688a05a-eb21-4955-8190-639c4a210afb',
    description: 'Task id',
  })
  @IsUUID('4')
  readonly id: string;
}
