import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parenthook',
  templateUrl: './parenthook.component.html',
  styleUrls: ['./parenthook.component.css']
})
export class ParenthookComponent implements OnInit {

  uid;


 mobile= [
    { name: 'vivo', price: '50k', model:'T1 pro',camera:'64MP'},
    { name: 'sony', price: '75k' ,model:'Xperia XZ 2', camera:'19MP'},
    {name:'Samsung',price:'1.87Lakh',model:'G-Fold2',camera:'36MP'},
    {name:'Oppo',price:'61k',model:'Find-X',camera:'36MP'}

  ];

  constructor() { }

  ngOnInit() {
    console.log(this.mobile);
    
  }

}
