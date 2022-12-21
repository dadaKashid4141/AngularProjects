import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {
getdata:any;
  
  constructor(private _demoService:DemoService ) { }

  ngOnInit() {
    this._demoService.getuserdata().subscribe(data=>{
      console.log(data);
     this.getdata=data;
    })
  }
  OnSubscribe(){
    // alert('service comp1 subscribed');
    this._demoService.display()  }
}
