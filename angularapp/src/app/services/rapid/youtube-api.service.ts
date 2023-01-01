import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  url='https://youtube-music1.p.rapidapi.com/v2/search?query=eminem';  //api url
  constructor(private httpclient:HttpClient) { 
    // console.log(typeof(this.url));
    
  }
  getdatayoutube():Observable<any>{
    let headers=new HttpHeaders({
      'X-RapidAPI-Key': 'e0b69edca1mshefde0d92427b801p121b0djsnf90e2a72e669',
      'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    })
   return this.httpclient.get(this.url,{headers:headers});
  }
}
