import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devapiurl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http:HttpClient) { }
  getpostdata():Observable<any>{
   return this._http.get(`${devapiurl}posts`);
}

getByPostId(id):Observable<any>{
  return this._http.get(`${devapiurl}posts/`+ id);
}
}
