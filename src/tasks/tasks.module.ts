import { forwardRef, Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './entities/task.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [SequelizeModule.forFeature([Task]), forwardRef(() => AuthModule)],
  exports: [TasksService],
})
export class TasksModule {}
