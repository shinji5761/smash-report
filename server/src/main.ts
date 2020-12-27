import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger : [ 'error', 'warn' , 'debug', 'log' ]
  });
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: "*",
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
  });
  await app.listen(configService.get( 'PORT' ) || 3000 );
}
bootstrap();