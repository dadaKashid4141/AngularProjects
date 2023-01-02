import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Firebase } from '../modelss/firebase';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-react-form-assign',
  templateUrl: './react-form-assign.component.html',
  styleUrls: ['./react-form-assign.component.css']
})
export class ReactFormAssignComponent implements OnInit {
  myReactiveForm:FormGroup;

  genders=[
    {id:'1' , value:'Male'},
    {id:'2' , value:'Female'}
  ];

  constructor(private _firebase:FirebaseService) {      //service injected
    this.createForm();
  }

  ngOnInit() {
this._firebase.getreactiveformdata().subscribe(res=>{         //get reactForm data
  console.log('get data reactform:',res);
  
})

  }
  createForm(){
    this.myReactiveForm=new FormGroup({
      'userDetails':new FormGroup({
      'firstname':new FormControl('',[Validators.required]),
      'lastname':new FormControl('',[Validators.required]),
        }),
        'ege':new FormControl('',[Validators.required,Validators.min(17),Validators.max(20),Validators.pattern('[0-9]+$')]),
        'email':new FormControl('',[Validators.required,Validators.email]),
        'Phone':new FormControl('',[Validators.required]),
        'city':new FormControl('Mumbai',[Validators.required]),
        'gender':new FormControl('',[Validators.required]),
        'password':new FormControl('',[Validators.required]),
        'cpassword':new FormControl('',[Validators.required])

         
      })
  }
  firebase:Firebase;
  OnSubmit(){
    // console.log(this.myReactiveForm);
    console.log(this.myReactiveForm.value);
    this.firebase=new Firebase;

    this.firebase.firstName=this.myReactiveForm['controls'].userDetails['controls'].firstname.value;
    this.firebase.lastName=this.myReactiveForm['controls'].userDetails['controls'].lastname.value;       //pass data to class 
    this.firebase.age=this.myReactiveForm['controls'].ege.value;
    this.firebase.email=this.myReactiveForm['controls'].email.value;
    this.firebase.password=this.myReactiveForm['controls'].password.value;
    this.firebase.conformPass=this.myReactiveForm['controls'].cpassword.value;
    this.firebase.gender=this.myReactiveForm['controls'].gender.value;
    this.firebase.Phone=this.myReactiveForm['controls'].Phone.value;
    this.firebase.city=this.myReactiveForm['controls'].city.value;





    this._firebase.createPostdataReactForm(this.firebase).subscribe(res=>{

      console.log("reactive form data in firebase DB",res);
      
    })

}
}