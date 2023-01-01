import { Component, OnInit } from '@angular/core';
import { RapidApiService } from '../rapid-api.service';

@Component({
  selector: 'app-rapid',
  templateUrl: './rapid.component.html',
  styleUrls: ['./rapid.component.css']
})
export class RapidComponent implements OnInit {
arrData:any[]=[];
  constructor(private rapid:RapidApiService) { }

  ngOnInit() {
    this.rapid.getDataBBfinance().subscribe(data=>{
      // console.log(data);
      this.arrData=data.news;
      
      console.log(this.arrData);
      
    })
  }

}
