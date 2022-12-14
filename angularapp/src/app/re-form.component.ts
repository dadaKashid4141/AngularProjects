import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-re-form',
  templateUrl: './re-form.component.html',
  styleUrls: ['./re-form.component.css']
})
export class ReFormComponent implements OnInit {
myReactiveForm: FormGroup;
// btndisable=true;

genders=[
  {id:'1' , value:'Male'},
  {id:'2' , value:'Female'}
];
notAllowedNames=['Codemind' ,'Technology','Codemind Technology'];

  constructor() {  
    this.createForm();
   }

  ngOnInit() {

  }
createForm(){
  this.myReactiveForm= new FormGroup({
    'username':new FormControl('' , [Validators.required,this.NaNames.bind(this)]),
    'email':new FormControl('',[ Validators.required,Validators.email]),
    'Course':new FormControl('Angular',[]),
    'gender':new FormControl('Male',[])
  }) 
}

OnSubmit(){
  console.log(this.myReactiveForm);
  console.log(this.myReactiveForm.get('username').value);
  
  
}
NaNames(control:FormControl){
  if (this.notAllowedNames.indexOf(control.value)!== -1) {
          return {'namesNotAllowed':true}   
  }
  return false;
}
}