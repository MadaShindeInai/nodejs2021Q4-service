import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './entities/task.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Tasks')
@Controller('boards')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOperation({ summary: 'Task creation' })
  @ApiResponse({ status: 201, type: Task })
  @UseGuards(AuthGuard)
  @Post('/:boardId/tasks')
  create(
    @Param('boardId') boardId: string,
    @Body() createTaskDto: CreateTaskDto
  ) {
    return this.tasksService.create(createTaskDto, boardId);
  }

  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, type: [Task] })
  @UseGuards(AuthGuard)
  @Get(':boardId/tasks')
  findAll(@Param('boardId') boardId: string) {
    return this.tasksService.findAll(boardId);
  }

  @ApiOperation({ summary: 'Get task by id' })
  @ApiResponse({ status: 200, type: Task })
  @UseGuards(AuthGuard)
  @Get(':boardId/tasks/:taskId')
  findOne(@Param('taskId') taskId: string, @Param('boardId') boardId: string) {
    return this.tasksService.findOne(taskId, boardId);
  }

  @ApiOperation({ summary: 'Update task' })
  @ApiResponse({ status: 200, type: Task })
  @UseGuards(AuthGuard)
  @Put(':boardId/tasks/:taskId')
  update(
    @Param('taskId') taskId: string,
    @Param('boardId') boardId: string,
    @Body() updateTaskDto: UpdateTaskDto
  ) {
    return this.tasksService.update(taskId, boardId, updateTaskDto);
  }

  @ApiOperation({ summary: 'Delete board' })
  @ApiResponse({ status: 204, type: Task })
  @UseGuards(AuthGuard)
  @Delete(':boardId/tasks/:taskId')
  @HttpCode(204)
  remove(@Param('taskId') taskId: string, @Param('boardId') boardId: string) {
    return this.tasksService.remove(taskId, boardId);
  }
}
