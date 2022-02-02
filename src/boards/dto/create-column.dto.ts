import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateColumnDto {
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
  @IsNumber()
  readonly order: number;
}
