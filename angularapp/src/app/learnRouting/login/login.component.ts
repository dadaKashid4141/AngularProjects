import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';
import { AuthService } from 'src/app/authGuard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _auth:AuthService,private _route:Router) { 
    
  }
  
  ngOnInit() {
  }
  
  login(username,password){
    var output = this._auth.checkUserPass(username,password);
    if (output==true) {
      this._route.navigate(['product']);
      window.alert('Login Successfullllly !');
    }
    else{
      alert('Invalid username or password');
    }
  }

}
