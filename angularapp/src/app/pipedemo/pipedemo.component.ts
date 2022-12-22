import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  todaydate= new Date;
  number=999;

  greeting="Hiiii champ!!!"
  constructor() { }

  ngOnInit() {
  }

}
