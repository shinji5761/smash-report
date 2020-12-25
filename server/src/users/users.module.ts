import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users';
import { UserController } from './users.controller';
import { UserService } from './users.service';

@Module({
      'imports' : [ TypeOrmModule.forFeature( [ Users ] ) ]
    , 'exports' : [ TypeOrmModule ]
    , 'providers' : [ UserService ]
    , 'controllers' : [ UserController ]
})
export class UserModule {}
