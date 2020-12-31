import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Counterplan } from './counterplan';

@Injectable()
export class CounterplanService {

    constructor(
        @InjectRepository( Counterplan )
        private repo : Repository< Counterplan >
    ) {}

    async find( param : any ) {
        let result = await this.repo.find({ 'where' : param } );
        return result;
    }

    async create( param : Partial<Counterplan> ) {
        await this.repo.insert( param );
        return;
    }

    async update( param : Partial<Counterplan> ) {
        await this.repo.save( param );
        return;
    }
}
