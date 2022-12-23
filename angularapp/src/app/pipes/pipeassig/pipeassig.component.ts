import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeassig',
  templateUrl: './pipeassig.component.html',
  styleUrls: ['./pipeassig.component.css']
})
export class PipeassigComponent implements OnInit {

  empArray=[{
    id:1,
    name:'rita',
    gender:'female',
    bday:'1 jun'
  },
  {
    id:2,
    name:'Sita',
    gender:'female',
    bday:'15 jun'
  },{
    id:3,
    name:'Gajanan',
    gender:'male',
    bday:'1 may'
  },
  {
    id:4,
    name:'Sweta',
    gender:'female',
    bday:'1 May'
  },
  {
    id:5,
    name:'Dyanesh',
    gender:'male',
    bday:'31 Dec'
  },]

  constructor() { }

  ngOnInit() {
  }

}
