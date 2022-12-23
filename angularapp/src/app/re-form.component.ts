import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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

  constructor(private _fb:FormBuilder) {  

    this.createForm();
   }

  ngOnInit() {
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetails' : {
          'username': 'Codemind1122',
          'email': 'test@gmail.com'
        }
      })
    }, 3500);

    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails' : {
    //       'username': 'Codemind1122',                        
    //       'email': 'test@gmail.com'
    //     },
    //     'course': 'HTML',
    //     'gender': 'Male'
    //   })
    // }, 3500);



  }
createForm(){
  this.myReactiveForm= new FormGroup({
    'userDetails':new FormGroup({
      'username':new FormControl('' , [Validators.required,this.NaNames.bind(this)]),
      'email':new FormControl('',[ Validators.required,Validators.email],this.NaEmails)
    }),
    'Course':new FormControl('Angular',[]),
    'gender':new FormControl('Male',[])
  }) 

  // this.myReactiveForm = this._fb.group({
  //   userDetails: this._fb.group({
  //     username: ['', Validators.required],                           //form builder
  //     email: ['', Validators.required]
  //   }),
  //   course: ['Angular'],
  //   gender: ['Male'],
  //   skills: this._fb.array([])
  // })

}

OnSubmit(){
  console.log(this.myReactiveForm);
  console.log(this.myReactiveForm.get('userDetails.username').value);
  
  
}
NaNames(control:FormControl){
  if (this.notAllowedNames.indexOf(control.value)!== -1) {
          return {'namesNotAllowed':true}   
  }
  return false;
 
  

  
}
NaEmails(control:FormControl): Promise<any> | Observable<any> {
  const myResponse = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      if(control.value === 'codemindtechnology@gmail.com'){
        resolve({'emailNotAllowed': true})
      } else {
        resolve(null)
      }
    }, 3000);
  })
  return myResponse;
}

}