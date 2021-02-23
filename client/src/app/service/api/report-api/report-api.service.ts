import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReport, IReportAnalys, IReportAnarysOption, IReportDetailOption, IReportFindAllOption, IReportToDates, IReportToDatesOption } from 'src/app/entity/i-report';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReportApiService {

  url : string = environment.api.host + '/report'

  constructor(
    private http : HttpClient
  ) { }

  async findToDates( option : IReportToDatesOption ) {
    return this.http.post<IReportToDates[]>( this.url + '/todates', option ).toPromise( );
  }

  async findByUsedCharAnalys( option : IReportAnarysOption ) {
    return this.http.post<IReportAnalys[ ]>( this.url + '/analys', option ).toPromise( );
  }

  async findByUsedCharDetail( option : IReportDetailOption ) {
    return this.http.post<IReportDetailOption[ ]>( this.url + '/detail', option ).toPromise( );
  }

  async findAll( option : IReportFindAllOption ) {
    return this.http.post<IReport[ ]>( this.url + '/list', option ).toPromise( );
  }

  async create( data : IReport ) {
    return this.http.post<IReport>( this.url, data ).toPromise( );
  }

  async update( data : IReport ) {
    return this.http.put<IReport>( this.url, data ).toPromise( );
  }

  async delete( data : IReport ) {
    return this.http.delete<IReport>( this.url + '/' + data.id ).toPromise( );
  }

}
