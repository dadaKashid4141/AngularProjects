import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Firebase } from '../modelss/firebase';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-simple-form-assing',
  templateUrl: './simple-form-assing.component.html',
  styleUrls: ['./simple-form-assing.component.css']
})
export class SimpleFormAssingComponent implements OnInit {

  constructor(private _firebase:FirebaseService) { }

  ngOnInit() {
    this._firebase.getTempdata().subscribe(res=>{
      console.log('Template form get data',res);
      
    })
  }
  firebase:Firebase;
  OnSubmit(form:NgForm){
    console.log(form);

    this.firebase=new Firebase;
    // this.firebase.firstName=form.value.fname
    this.firebase=form.value;
    console.log(this.firebase);
    this._firebase.createPostdatatemplateForm(this.firebase).subscribe(tmpres=>{
      console.log(tmpres);
      
    })
    
  }

}
