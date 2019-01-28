import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { observable, Observable } from 'rxjs';

const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

   constructor(private http:HttpClient ) { }

  getAll():Observable<any[]> {
    return this.http.get<any[]>(photosUrl);
  }
  get(id):Observable<any>{
    return this.http.get<any>(photosUrl + '/'+ id);
  }
}
