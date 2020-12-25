import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportApiService } from './report-api/report-api.service';
import { UserApiService } from './user-api/user-api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiFactoryService {

  constructor(
    private http : HttpClient
  ) { }
  
  getUserApi( ) {
    return new UserApiService( this.http );
  }


  getReportApi( ) {
    return new ReportApiService( this.http );
  }

}
