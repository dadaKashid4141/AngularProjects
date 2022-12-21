import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {
  products:any;
  constructor(private _demoService:DemoService) { }
  getdata:any=[];
  ngOnInit() {
    this.products=this._demoService.products;
    this._demoService.getuserdata().subscribe(data=>{
    this.getdata=data;
      
    })
  }
  OnSubscribe(){
  //   alert('service comp2 subscribed');   
   this._demoService.display();           //display method from demoservices.ts
  }
}
