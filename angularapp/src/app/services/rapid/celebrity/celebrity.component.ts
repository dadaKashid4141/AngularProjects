import { Component, OnInit } from '@angular/core';
import { RapidApiService } from '../../rapid-api.service';

@Component({
  selector: 'app-celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.css']
})
export class CelebrityComponent implements OnInit {
arrceleb:any[]=[];                                      //array for store api data
  constructor(private bio:RapidApiService) { }              //service injected for celeb api 

  ngOnInit() {
    this.bio.getdataceleb().subscribe(result=>{         
      console.log('celebrity Data:-',result);
      this.arrceleb=result.moreFacts;
      console.log("arrceleb:",this.arrceleb);
      
    })
  }

}
