import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addremovebutton',
  templateUrl: './addremovebutton.component.html',
  styleUrls: ['./addremovebutton.component.css']
})
export class AddremovebuttonComponent implements OnInit {
  arrayOfMob=[
    {compony:"Apple",model:"S1 pro",camera:"24Mp",price:"91k"},
    {compony:"Sony",model:"Xperia Xf",camera:"36Mp",price:"86k"},
    {compony:"Vivo",model:"T1 pro",camera:"64Mp",price:"26k"}
  ]
  onclick(){
    this.arrayOfMob
  }

  constructor() { }

  ngOnInit() {
  }

}
