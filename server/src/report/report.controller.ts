import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { Report } from './report';
import { FindAllReport, FindAllReportDto, FindSummaryReport } from './report-dto';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {

    constructor(
        private svc : ReportService
    ) { }

    @Post('list')
    async findAll(@Body() body : FindAllReportDto ) {
        var param : FindAllReport = { 'uId' : body.uId };
        if( body.usedCharId )
            param['usedCharId'] = body.usedCharId;
        if( body.compCharId )
            param['compCharId'] = body.compCharId;
        let result, cnt;
        try {
            result = await this.svc.findAll( param, body.offset, body.limit );
            cnt = await this.svc.findAllCnt( param );
        } catch( e ) {
            throw e;
        }
        return [result, cnt];
    }

    @Post('analys')
    async findByUsedCharSummary(@Body() body : FindSummaryReport ) {
        let result : any
        try {
            result = await this.svc.findByUsedCharSummary( body );
        } catch( e ) {
            throw e;
        }
        return result;

    }

    @Post()
    async create(@Body() dto : Partial<Report> ) {
        try {
            await this.svc.create( dto );
        } catch( e ) {
            throw e;
        }
        return;
    }

    @Put()
    async update(@Body() dto : Partial<Report> ) {
        try {
            await this.svc.update( dto );
        } catch( e ) {
            throw e;
        }
        return;
    }

    @Delete('/:id')
    async delete(@Param('id') id ) {
        console.dir( id );
        try {
            await this.svc.delete( id );
        } catch( e ) {
            throw e;
        }
        return;
    }

}
