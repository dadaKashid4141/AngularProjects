import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  userName;
  constructor(private _utilities:UtilityService) {
    this._utilities.userName.subscribe(result=>{
      this.userName=result;
    })
   }

  ngOnInit() {
  }
  updateUserName(uname){
    console.log(uname.value);
    this._utilities.userName.next(uname.value)
      }
}
