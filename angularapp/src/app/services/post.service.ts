import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devapiurl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient) { }        // s1-HttpClient -use when data from server site(jsonplaceholder)
  getpostdata():Observable<any>{
   return this._http.get(`${devapiurl}posts`);      //st2- get data from url used in environment
}

getByPostId(id):Observable<any>{
  return this._http.get(`${devapiurl}posts/`+ id);
}
}
