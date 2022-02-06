import { Logger } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './exceptions/filterAll.exception';
import { ValidationPipe } from './pipes/validation.pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Trello Service')
    .setDescription('Let`s try to create a competitor for Trello!')
    .setVersion('1.0.0')
    .addTag('MadaShindeInai')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/doc', app, document);
  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));
  app.useLogger(new Logger());
  await app.listen(process.env.PORT || 3333, () =>
    console.log(
      `Server started on port ${
        process.env.PORT || 3333
      }\nTo create initial admin-user run "make admin-user" or "npx sequelize-cli db:migrate"`
    )
  );
}
bootstrap();
