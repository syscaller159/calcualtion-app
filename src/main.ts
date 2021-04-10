import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverConfiguration from './config/server.config';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  await app.listen(serverConfiguration.port || 8000);
}
bootstrap();
