import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// Users API
import { Users } from './users/users';
import { UserModule } from './users/users.module';

// Report API
import { Report, SummaryReport } from './report/report';
import { ReportModule } from './report/report.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'smash_report',
      // host: 'smash-report-db.clgb2sjfkh0r.ap-northeast-1.rds.amazonaws.com',
      // port: 5432,
      // username: 'smash_report',
      // password: 'Infinite33',
      // database: 'smash_report',
      entities: [ Users, Report, SummaryReport ],
      synchronize: true,
    }),
    UserModule,
    ReportModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
