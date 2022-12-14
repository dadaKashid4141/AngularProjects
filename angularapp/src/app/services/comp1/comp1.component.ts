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
mobile=[{name:'LG',price:'25k',camera:'12MP',RAM:'8GB'},
{name:'vivo',price:'25k',camera:'122MP',RAM:'8GB'},
{name:'mi',price:'15k',camera:'120MP',RAM:'6GB'},
{name:'Nokia',price:'50k',camera:'12MP',RAM:'8GB'}
]

  ngOnInit() {
    this._utilities.userName.next(this.mobile)
  }
//   updateUserName(uname){                  //updateUserName is a method used in html file for result display  
// console.log(uname.value);
// this._utilities.userName.next(uname.value)

  // }

}
