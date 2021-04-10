import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverConfiguration from './config/server.config';
import { ValidationPipe } from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
      .setTitle('Calculations app')
      .setDescription('')
      .setVersion('0.0.1')
      .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v1/docs', app, document);


  await app.listen(serverConfiguration.port || 8000);
}
bootstrap();
