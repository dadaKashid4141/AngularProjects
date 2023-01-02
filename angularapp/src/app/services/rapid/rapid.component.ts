import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { RapidApiService } from '../rapid-api.service';

@Component({
  selector: 'app-rapid',
  templateUrl: './rapid.component.html',
  styleUrls: ['./rapid.component.css']
})
export class RapidComponent implements OnInit {
arrData:any[]=[];
  constructor(private rapid:RapidApiService,private firebase:FirebaseService) { } //services injected

  ngOnInit() {
    this.rapid.getDataBBfinance().subscribe(data=>{                               //subsribed for BBfinance API
      // console.log(data);
      this.arrData=data.news;
      
      console.log(this.arrData);
      
    })
  }
  createPost(){
    this.firebase.createPost().subscribe(result=>{                            //subscribed firebase post api
      console.log('Firebase post data:',result);                                 
      
    })
  }

}
