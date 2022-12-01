import { Component, Input, OnInit } from '@angular/core';
import { Courses } from 'src/app/modelss/Courses';

@Component({
  selector: 'app-childe',
  templateUrl: './childe.component.html',
  styleUrls: ['./childe.component.css']
})
export class ChildeComponent implements OnInit {
  @Input() item: any;// object
  @Input() all: Courses[] = [];//for array of object

  constructor() { }

  ngOnInit() {
    console.log(this.item);

  }

}
