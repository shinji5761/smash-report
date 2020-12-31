import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Counterplan } from './counterplan';
import { CounterplanController } from './counterplan.controller';
import { CounterplanService } from './counterplan.service';

@Module({
      imports : [ TypeOrmModule.forFeature([ Counterplan ] ) ]
    , exports : [ TypeOrmModule ]
    , controllers : [ CounterplanController ]
    , providers : [ CounterplanService ]
})
export class CounterplanModule {}
