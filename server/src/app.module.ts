import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// Users API
import { Users } from './users/users';
import { UserModule } from './users/users.module';

// Report API
import { DetailReport, Report, SummaryReport } from './report/report';
import { ReportModule } from './report/report.module';
import { CounterplanModule } from './counterplan/counterplan.module';
import { Counterplan } from './counterplan/counterplan';


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
      entities: [ Users, Report, SummaryReport, Counterplan, DetailReport ],
      synchronize: true,
    }),
    UserModule,
    ReportModule,
    CounterplanModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
