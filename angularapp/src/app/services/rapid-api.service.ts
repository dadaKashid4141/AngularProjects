import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidApiService {
  url = 'https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';
  celburl = 'https://search-celebrity-biography.p.rapidapi.com/search/jimmy%20fallon';//url for celebrity

  constructor(private httpclient: HttpClient) { }
  getDataBBfinance(): Observable<any> {
    let header = new HttpHeaders({

      'X-RapidAPI-Key': 'e0b69edca1mshefde0d92427b801p121b0djsnf90e2a72e669', //for bbfinance
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com'
    })
    return this.httpclient.get(this.url, { headers: header });
  }



  getdataceleb(): Observable<any> {

    let header = new HttpHeaders({
      'X-RapidAPI-Key': 'e0b69edca1mshefde0d92427b801p121b0djsnf90e2a72e669',   //for celebrity API 
      'X-RapidAPI-Host': 'search-celebrity-biography.p.rapidapi.com'

    })
    return this.httpclient.get(this.celburl, { headers: header })
  }
}
