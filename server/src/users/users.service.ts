import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository( Users )
        private readonly repo : Repository<Users>
    ) {

    }

    /** 検索 id */
    async findById( id : string ) {
        const user : Users = await this.repo.findOne( { where : { id }} );
        return user;
    }

    /** 作成 */
    async create( data : Partial<Users> ) {
        if( await this.repo.findOne( data.id ) ) {
            return Promise.reject(new Error('Users is already'));
        }
        await this.repo.insert({ ...data });
        return;
    }

    /** 更新 */
    async update( data : Partial<Users> ) {
        if( ! ( await this.repo.findOne( data.id ) ) ) {
            return Promise.reject(new Error('Users Not Found' ) );
        }
        await this.repo.update( data.id, data );
        return;
    }

}
