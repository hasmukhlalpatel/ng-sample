import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


const userUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  constructor(private http:HttpClient ) { }

  getAll(){
    return this.http.get(userUrl);
  }
  get(id){
    return this.http.get(userUrl + '/'+ id);
  }

}
