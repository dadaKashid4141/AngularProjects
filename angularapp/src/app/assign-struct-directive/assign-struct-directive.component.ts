import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';
import { Courses } from '../modelss/Courses';

@Component({
  selector: 'app-assign-struct-directive',
  templateUrl: './assign-struct-directive.component.html',
  styleUrls: ['./assign-struct-directive.component.css']
})
export class AssignStructDirectiveComponent  {

  isShow:boolean;
  baseValue(){
    this.isShow=true;   //ngIf
  }

  demo:boolean=true;   //nfIf
    constructor() { }
    
   

    allcourses:Courses[]=[
      {courseName:'Angular',durationss:"4 Months",fees:'20K'},
      {courseName:'React',durationss:'3 Months',fees:'20K'},
      {courseName:'Testing',durationss:'3 Months',fees:'30K'},
      {courseName:'Java',durationss:'5 Months',fees:'41 K'}
    ]
     newValue:string;
    getValue(onevalue){
 
      console.log(onevalue.target.value);
      this.newValue=onevalue.target.value;
      
    }

    }
 