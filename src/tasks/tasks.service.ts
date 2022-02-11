import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async create(createTaskDto: CreateTaskDto, boardId: string) {
    const task = await this.taskRepository.create({
      ...createTaskDto,
      boardId,
    });
    return task;
  }

  async findAll(boardId: string) {
    return await this.taskRepository.findAll({
      where: { boardId },
    });
  }

  async findOne(taskId: string, boardId: string) {
    const task = await this.taskRepository.findOne({
      where: { boardId, id: taskId },
    });
    if (!task) throw new NotFoundException('No task found');
    return task;
  }

  async update(taskId: string, boardId: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.findOne({
      where: { boardId, id: taskId },
    });
    if (!task) throw new NotFoundException('No task found');
    const updatedTask = await task.update({
      ...updateTaskDto,
      boardId,
      id: taskId,
    });
    return updatedTask;
  }

  async remove(taskId: string, boardId: string) {
    const user = await this.taskRepository.destroy({
      where: { id: taskId, boardId },
    });
    return user;
  }
}
