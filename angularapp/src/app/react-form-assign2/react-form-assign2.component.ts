import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
  notAllowedNames=['test'];
  ngOnInit() {
  }

  createForm(){ 
    this.myReactiveForm=new FormGroup({
    
      'projectname':new FormControl('',[Validators.required,this.NaNames.bind(this)],this.Naproject.bind(this)),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'Status':new FormControl('Stable',)
  })
}
  OnSubmit(): void{
    console.log(this.myReactiveForm);
    console.log(this.myReactiveForm.value);
    
  }
  NaNames(control:FormControl){
    if (this.notAllowedNames.indexOf(control.value)!== -1) {
            return {'namesNotAllowed':true}   
    }
    return null;
  
}

Naproject(control:FormControl): Promise<any> | Observable<any> {
  const myResponse = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if(control.value === 'test'){
       // resolve({'testNotAllowed': true})
       setTimeout(() => {
        this.myReactiveForm.patchValue({
        
          'projectname': 'New Project'
          })
       }, );
     
      } else  {
        resolve(null)
      }
    }, 5000);
  })
  return myResponse;
}

}


