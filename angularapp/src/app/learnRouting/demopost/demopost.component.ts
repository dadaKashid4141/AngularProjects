import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/modelss/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {
  arrpostdata:Post[]=[];
  constructor(private _post:PostService) { }      //di
  
  ngOnInit() {
    this._post.getpostdata().subscribe(res=>{
      // console.log(res);
      this.arrpostdata=res;
     console.log(this.arrpostdata);
     
      
    })
  }

}
