import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
checkUserPass(username:string,password:string){
  if (username=='admin'&&password=='admin123') {
    sessionStorage.setItem('username','admin')
    return true;
  }
  else{
    return false;
  }
}
  constructor() { }
}
