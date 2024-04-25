import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import sequelize from 'sequelize';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000, () => console.log('start on 3000'));
}
bootstrap();
