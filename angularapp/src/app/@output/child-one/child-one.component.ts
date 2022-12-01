import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  // @Output() myFood:EventEmitter<string>=new EventEmitter<string>();
  // getfood(value){
  //     this.myFood.emit(value);
  // }
  @Output() getmobiles: EventEmitter<any> = new EventEmitter<any>();

  mobile = [
    { name: 'vivo', price: '50k' },
    { name: 'sony', price: '60k' }
  ]
  onclick() {
    this.getmobiles.emit(this.mobile)
  }
  constructor() { }

  ngOnInit() {
  }

}
