import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
import { Column } from '../entities/column.entity';

export class CreateBoardDto {
  @ApiProperty({
    example: 'Dan',
    description: 'Board`s title',
  })
  @IsString({ message: 'Should be a string' })
  readonly title: string;

  @ApiProperty({
    example: [],
    description: 'Array of connected columns',
  })
  @IsArray({ message: 'Should be an array' })
  readonly columns: Column[];
}
