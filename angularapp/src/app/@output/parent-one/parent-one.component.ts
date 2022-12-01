import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
// export class ParentOneComponent implements OnInit {
//   arrayFood=[];
//   demo(val){
//    this.arrayFood(val)
//   }
//   constructor() { }

//   ngOnInit() {
//   }

// }
export class ParentOneComponent implements OnInit {
  uid;
  newmobile = [];
  mobiledetais(value) {
    // console.log(value);
    this.newmobile = value;
    this.newmobile = value;
    console.log(this.newmobile);
  }

  clearArray = [];
  clear() {
    this.newmobile = this.clearArray

  }

  constructor() { }

  ngOnInit() {
  }

}