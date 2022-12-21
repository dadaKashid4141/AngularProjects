import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
   products=[ {name:'Laptop',id:'101'},{name:'Mobile',id:'102'},{name:'TV',id:'103'}];
   apiUrl='https://jsonplaceholder.typicode.com/users';

  constructor(private _http:HttpClient) { }
  display(){
    alert('Subscribed Sucessefully')
  }
  getuserdata(){
    return this._http.get(this.apiUrl)
  }
}
