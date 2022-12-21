import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName;
  constructor(private _utilities:UtilityService) { 
    this._utilities.userName.subscribe(result=>{
      this.userName=result;
      console.log(this.userName);
    })
    
    
  }


  ngOnInit() {
  }
  // updateUserName(uname){
  //   console.log(uname.value);
  //   this._utilities.userName.next(uname.value)
  //     }
}
