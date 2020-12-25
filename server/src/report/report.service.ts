import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { Report, SummaryReport } from './report';
import { FindAllReport, FindSummaryReport } from './report-dto';

@Injectable()
export class ReportService {

    constructor(
        @InjectRepository( Report )
        private repo : Repository<Report>
    ) {}

    async findById( id : number ) {

    }

    /** 検索 使用キャラ */
    async findByUsedCharSummary( param : FindSummaryReport ) {
        const entryManager = getManager();
        let result = await entryManager.find( SummaryReport , { 'where' : param } );

        return result;
    }

    /** 検索 件数 */
    async findAllCnt( param : FindAllReport ) {
        let [result, cnt] = await this.repo.findAndCount({ 'where' : param } );
        return cnt;
    }

    /** 検索 */
    async findAll( param : FindAllReport, skip : number, limit : number ) {
        let result = await this.repo.find({ 'where' : param, 'skip' : skip, 'take' : limit, 'order' : { 'created_at' : 'DESC' } } );
        return result;
    }

    /** 作成 */
    async create( param : Partial<Report> ) {
        await this.repo.insert( {...param} );
        return;
    }

    /** 更新 */
    async update( param : Partial<Report> ) {
        await this.repo.save( param );
        return
    }

    /** 削除 */
    async delete( param : Partial<Report> ) {
        await this.repo.delete( param );
        return;
    }

}
