import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,PatternValidator, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form-assign2',
  templateUrl: './react-form-assign2.component.html',
  styleUrls: ['./react-form-assign2.component.css']
})
export class ReactFormAssign2Component implements OnInit {
  myReactiveForm:FormGroup;
  constructor() { 
    this.createForm();
  }
  
  ngOnInit() {
  }

  createForm(){ 
    this.myReactiveForm=new FormGroup({
    
      'projectname':new FormControl('',[Validators.required]),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'Status':new FormControl('Stable',)
  })
}
  OnSubmit(): void{
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm.value);
    
  }
}


