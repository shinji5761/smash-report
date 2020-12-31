import { Body, Controller, Post, Put } from '@nestjs/common';
import { Counterplan, ICounterplanDto } from './counterplan';
import { CounterplanService } from './counterplan.service';

@Controller('counterplan')
export class CounterplanController {

    constructor(
        private svc : CounterplanService
    ) { }

    @Post('get')
    async find(@Body() body : ICounterplanDto ) {
        let result;
        try {
            result = await this.svc.find( body );
        } catch( e ) {
            throw e;
        }
        return result;
    }


    @Post('')
    async create(@Body() body : Partial<Counterplan> ) {
        try {
            await this.svc.create( body );
        } catch( e ) {
            throw e;
        }
        return;
    }

    @Put('')
    async update(@Body() body : Partial<Counterplan> ) {
        try {
            await this.svc.update( body );
        } catch( e ) {
            throw e;
        }
        return;
    }

}
