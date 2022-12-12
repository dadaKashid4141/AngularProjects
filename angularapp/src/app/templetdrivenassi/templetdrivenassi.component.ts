import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templetdrivenassi',
  templateUrl: './templetdrivenassi.component.html',
  styleUrls: ['./templetdrivenassi.component.css']
})
export class TempletdrivenassiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form);
  }
}
