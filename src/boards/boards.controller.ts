import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Board } from './entities/board.entity';

@ApiTags('Boards')
@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @ApiOperation({ summary: 'Board creation' })
  @ApiResponse({ status: 201, type: Board })
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() createBoardDto: CreateBoardDto) {
    const test = await this.boardsService.create(createBoardDto);
    return test;
  }

  @ApiOperation({ summary: 'Get all boards' })
  @ApiResponse({ status: 200, type: [Board] })
  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.boardsService.findAll();
  }

  @ApiOperation({ summary: 'Get board by id' })
  @ApiResponse({ status: 200, type: Board })
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boardsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update board' })
  @ApiResponse({ status: 200, type: Board })
  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardsService.update(id, updateBoardDto);
  }

  @ApiOperation({ summary: 'Delete board' })
  @ApiResponse({ status: 204, type: Board })
  @UseGuards(AuthGuard)
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.boardsService.remove(id);
  }
}
