import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attri',
  templateUrl: './attri.component.html',
  styleUrls: ['./attri.component.css']
})
export class AttriComponent implements OnInit {

    colorval="blue";

//   <h4>Ng Class</h4>

//  <ul *ngFor="let person of people">
//        <li [ngClass]="{
//           'text-success': person.country === 'UK',
//          'text-primary': person.country === 'USA',
//           'text-danger': person.country === 'HK'
//      }">
   
//         {{person.name}} ({{person.country}})
//        </li>
//    </ul>
//      ]
  uname:string;
show(value){
this.uname=value;
}
  constructor() { }
  ngOnInit():void
{
 
}
  
}

