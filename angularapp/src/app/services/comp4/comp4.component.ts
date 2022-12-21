import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
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
