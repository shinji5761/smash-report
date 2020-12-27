import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import fs = require( 'fs' );

const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/smash-report.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/smash-report.com/cert.pem'),
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger : [ 'error', 'warn' , 'debug', 'log' ],
    httpsOptions
  });
  const configService = app.get(ConfigService);
  app.enableCors({
    origin: "*",
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
  });
  await app.listen(configService.get( 'PORT' ) || 3000 );
}
bootstrap();