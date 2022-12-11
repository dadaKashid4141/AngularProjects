import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigndirective',
  templateUrl: './assigndirective.component.html',
  styleUrls: ['./assigndirective.component.css']
})
export class AssigndirectiveComponent implements OnInit {

 
showSecret = false;
log = [];
  constructor() { }

  ngOnInit() {
  }
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1) ;
  }
}


