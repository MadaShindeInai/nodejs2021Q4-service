import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Dan',
    description: 'Task`s title',
  })
  @IsString({ message: 'Should be a string' })
  readonly title: string;

  @ApiProperty({
    example: 'admin',
    description: 'Tasks`s description',
  })
  @IsString({ message: 'Should be a string' })
  readonly description: string;

  @ApiProperty({
    example: 1,
    description: 'Tasks`s order',
  })
  @IsNumber()
  readonly order: number;

  @ApiProperty({
    example: 'b052e834-060b-4a33-b11c-8d431864ea32',
    description: 'Tasks`s boardId',
  })
  @IsUUID('4')
  @IsOptional()
  readonly boardId: string | null;

  @ApiProperty({
    example: 'b052e834-060b-4a33-b11c-8d431864ea32',
    description: 'Tasks`s columnId',
  })
  @IsUUID('4')
  @IsOptional()
  readonly columnId: string | null;

  @ApiProperty({
    example: 'b052e834-060b-4a33-b11c-8d431864ea32',
    description: 'Tasks`s userId',
  })
  @IsUUID('4')
  @IsOptional()
  readonly userId: string | null;
}
