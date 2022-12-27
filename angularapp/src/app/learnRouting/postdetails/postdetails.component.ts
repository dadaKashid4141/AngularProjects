import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/modelss/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  constructor(private _postService:PostService,private route:ActivatedRoute) { }
  postDetail:Post[]=[];
 ngOnInit() {
   let id=this.route.snapshot.params['id'];
   this._postService.getByPostId(id).subscribe(res=>{
      this.postDetail.push(res);
     console.log(`get Post by id `, res); 
     console.log(`Post Details on Component Variable: ${this.postDetail}`);
     
   })
 }
}
