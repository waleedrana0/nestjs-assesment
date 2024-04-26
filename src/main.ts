import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log('Application is running on: 3000 and DB initialized');
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
