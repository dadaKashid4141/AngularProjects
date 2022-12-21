import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  username;
  constructor(private _utilities:UtilityService) {                    //DI from utility.service
    this._utilities.userName.subscribe(result=>{                       //here userName is subject ,& is subscribed
      this.username=result;                                              //result is assign to var userName for log result 
    })
   }

  ngOnInit() {
  }
  updateUserName(uname){                  //updateUserName is a method used in html file for result display  
console.log(uname.value);
this._utilities.userName.next(uname.value)

  }
}
