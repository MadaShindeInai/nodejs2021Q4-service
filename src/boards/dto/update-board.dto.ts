import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateColumnDto } from './create-column.dto';

export class UpdateColumnDto extends CreateColumnDto {
  @ApiProperty({
    example: 'a688a05a-eb21-4955-8190-639c4a210afb',
    description: 'Id of connected board',
  })
  @IsOptional()
  readonly id?: string;

  @ApiProperty({
    example: 'a688a05a-eb21-4955-8190-639c4a210afb',
    description: 'Id of connected board',
  })
  @IsOptional()
  readonly boardId?: string;
}
export class UpdateBoardDto {
  @ApiProperty({
    example: 'a688a05a-eb21-4955-8190-639c4a210afb',
    description: 'Id of connected board',
  })
  @IsString({ message: 'Should be a string' })
  readonly id: string;

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
  @Type(() => UpdateColumnDto)
  readonly columns: UpdateColumnDto[];
}
