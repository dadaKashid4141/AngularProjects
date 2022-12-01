import { Component, Directive, OnInit } from '@angular/core';
import { Movie } from '../modelss/movies';

@Component({
  selector: 'app-demodirective',
  templateUrl: './demodirective.component.html',
  styleUrls: ['./demodirective.component.css']
})
export class DemodirectiveComponent implements OnInit {
  //  for ngIf Directive
 isshow:boolean=true;


  // for ngfor Directive
title : string = "Top 3 Movies";
//making array of object
movies: Movie[] = [
  { title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2007' },
  { title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
  { title: 'KGF', director: 'RockBhai', cast:'Yash', releaseDate: '2019'}
]




  constructor() { }

  ngOnInit() {
  }

}
