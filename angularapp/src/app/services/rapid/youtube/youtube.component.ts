import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from '../youtube-api.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {
gettingdata:any[]=[];
  constructor(private youtube:YoutubeApiService) { }

  ngOnInit() {
    this.youtube.getdatayoutube().subscribe(res=>{    
      console.log("Youtube API: ",this.gettingdata);
      this.gettingdata.push(res.result.songs);    //for displya data in view 
    })
    // let arrOfget=Object.keys(this.gettingdata);
    // console.log('arrof objee',arrOfget);
  //  console.log(this.gettingdata);
    
  }
}
