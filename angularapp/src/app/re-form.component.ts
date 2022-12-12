import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-re-form',
  templateUrl: './re-form.component.html',
  styleUrls: ['./re-form.component.css']
})
export class ReFormComponent implements OnInit {
myReactiveForm: FormGroup;
  constructor() {
    this.createForm();
   }

  ngOnInit() {

  }
createForm(){
  this.myReactiveForm= new FormGroup({
    'username':new FormControl('' , Validators.required),
    'email':new FormControl('', Validators.required,)
  })
}

OnSubmit(){
  console.log(this.myReactiveForm);
  
}
}
