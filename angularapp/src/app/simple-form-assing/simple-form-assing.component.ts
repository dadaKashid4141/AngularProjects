import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form-assing',
  templateUrl: './simple-form-assing.component.html',
  styleUrls: ['./simple-form-assing.component.css']
})
export class SimpleFormAssingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form);
    
  }

}
