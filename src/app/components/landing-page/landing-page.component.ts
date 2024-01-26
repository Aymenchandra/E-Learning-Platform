import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private courseService: CoursesService,
  ) {

  }
  ngOnInit(): void {
    this.getCourses()
  }

  getCourses(){
    this.courseService.getCourses().subscribe((res)=>{
      console.log(res)
    })
  }
}
