import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
  
username=" ";

cleardata(){
  this.username=" ";
}
  
// check(){
//   if (this.username==" ") {
//     return true;
//   }else{
//     return false;
//   }
// }
check(){
  this.username==" "? true:false;
}

  constructor() { }

  ngOnInit() {
  }

}
