import { forwardRef, Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Board } from './entities/board.entity';
import { Column } from './entities/column.entity';
import { AuthModule } from 'src/auth/entities/auth.entity';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
  imports: [
    SequelizeModule.forFeature([Board, Column]),
    forwardRef(() => AuthModule),
  ],
  // exports: [BoardsService],
})
export class BoardsModule {}
