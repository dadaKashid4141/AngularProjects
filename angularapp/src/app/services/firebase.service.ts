import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

 
url='https://angular-crud-44534-default-rtdb.firebaseio.com/';    //url from firebase
  constructor(private httpclient:HttpClient) { }
  createPost(){
    let postdata={
      title:'this is angular 8 crud',
      containt:'this is firebase crud with post'
    }
    return this.httpclient.post(this.url +'post.json',postdata);   //+post.json is mandatory
  }
  createPostdataReactForm( fireBase){            
    return this.httpclient.post(this.url +'reactForm.json',fireBase);
  }

  getreactiveformdata(){
    return this.httpclient.get(this.url+ 'post.json');
  }

  createPostdatatemplateForm( fireBase){            
    return this.httpclient.post(this.url +'template.json',fireBase);   //template form post 
  }

  getTempdata(){
    return this.httpclient.get(this.url+'temp.json');    //template form get
  }
}
