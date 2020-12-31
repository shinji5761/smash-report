import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICounterplan, ICounterplanDto } from 'src/app/entity/i-counterplan';

@Injectable({
  providedIn: 'root'
})
export class CounterplanApiService {

  url : string = environment.api.host + '/counterplan'

  constructor( private http : HttpClient ) { }

  async find( option : ICounterplanDto ) {
    return this.http.post<ICounterplan[]>( this.url + '/get', option ).toPromise( );
  }

  async create( data : ICounterplan ) {
    return this.http.post<ICounterplan>( this.url, data ).toPromise( );
  }

  async update( data : ICounterplan ) {
    return this.http.put<ICounterplan>( this.url, data ).toPromise( );
  }

}
