import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/modelss/Courses';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  //object sharing
  message: any = [
    { movieName: 'KGF2', cast: "Yash", Budget: "100 crores INR" },

  ]

  //array of object sharing
  allcourses: Courses[] = [
    { courseName: 'Angular', durationss: "4 Months", fees: '20K' },
    { courseName: 'React', durationss: '3 Months', fees: '20K' },
    { courseName: 'Testing', durationss: '3 Months', fees: '30K' },
    { courseName: 'Java', durationss: '5 Months', fees: '41 K' }
  ]


  constructor() { }

  ngOnInit() {
  }
}
let movies = {
  name: "Magdhira",
  director: "rahul shetti",
  cast: "Ramcharan",
  realiseData: "15 Dec 20220"
}

// console.log(movies);

