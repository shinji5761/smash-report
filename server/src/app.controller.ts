import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  root( @Res() res ) {
      res.sendFile( '/var/www/html/browser/index.html' );
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
