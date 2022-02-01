import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/entities/auth.entity';
import { BoardsModule } from './boards/boards.module';
import { User } from './users/entities/user.entity';
import { Board } from './boards/entities/board.entity';
import { Column } from './boards/entities/column.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Column, Board],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    BoardsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
