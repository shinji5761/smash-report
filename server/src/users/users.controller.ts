import { Body, Controller, Post, Put } from '@nestjs/common';
import { Users } from './users';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
    
    constructor(
        private svc : UserService
    ) {}

    @Post( 'find' )
    async findById(@Body() data : Partial<Users> ) {
        let user;
        try {
            user = await this.svc.findById( data.id );

        } catch( e ) {
            throw e;
        }
        // if ( !user ) {
        //     throw new HttpException({'status' : HttpStatus.NOT_FOUND, 'error' : 'Not Found'});
        // }
        return user;
    }

    @Post( )
    async create(@Body( ) data : Partial<Users> ) {
        try {
            await this.svc.create( data );
        } catch( e ) {
            throw e;
        }
        return;
    }

    @Put( )
    async update(@Body( ) data : Partial<Users> ) {
        try {
            await this.svc.update( data );
        } catch( e ) {
            throw e;
        }
        return;
    }

}
