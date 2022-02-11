import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, ValidateNested } from 'class-validator';
import { CreateColumnDto } from './create-column.dto';

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
  @ValidateNested()
  @Type(() => CreateColumnDto)
  readonly columns: CreateColumnDto[];
}
