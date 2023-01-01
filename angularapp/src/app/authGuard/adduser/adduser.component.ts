import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 
  
  userName: FormControl = new FormControl();
  myReactiveForm: FormGroup;
  constructor() { 
    this.createForm();
  }
  ngOnInit() {
  }
  

  createForm(){ 
    this.myReactiveForm=new FormGroup({
      'username':new FormControl('',),
      
    })
}
OnSubmit(): void{
 
  console.log(this.myReactiveForm.value);
  
}
}