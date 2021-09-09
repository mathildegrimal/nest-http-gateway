import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const logger = new Logger('App Http Logger');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  logger.log('App Http is started');
}
bootstrap();
