import { Component } from '@angular/core';
import { GettingUserDataService } from '../../../Services/getting-user-data.service';

@Component({
  selector: 'app-active-courses',
  templateUrl: './active-courses.component.html',
  styleUrl: './active-courses.component.css'
})
export class ActiveCoursesComponent {
  courses: Array<any>=[];
  constructor(private uD: GettingUserDataService) {
    this.uD.fetchingApi().subscribe(res => {
      this.courses = res.result.courses;
    });

  }
}
