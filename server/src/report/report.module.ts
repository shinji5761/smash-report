import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './report';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  imports : [ TypeOrmModule.forFeature( [ Report ] ) ],
  exports : [ TypeOrmModule ],
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule {}
