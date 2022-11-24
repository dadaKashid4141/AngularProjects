import { Interpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {


name:string="Codmind Technology LLP"     

allowNewServer=true;

myname:string=" " ;
urname:string="rahul"

onclick(){
   this.myname="dada kashid"
}

  ngOnInit() {
  }

}
