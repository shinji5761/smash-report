import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  url : string = 'users';


  constructor( private http : HttpClient ) { }

  
  /** 取得 */
  async find( ) {

  }

  /** 取得全件取得 */
  async findAll( ) {

  }

  /** update or inseart */
  async upsert( ) {

  }

  async create( email : string, password : string ) {
  }

  async update( ) {

  }

  async delete( ) {

  }

}
