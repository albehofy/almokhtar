import { Component } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {
  universities:Array<any> = [];
  universityId:any;
  constructor(private fpd:FetchingPublickDataService){
    this.fpd.gettingniversities().subscribe(
      {
        next: res=>{
          this.universities  = res.result.data;
        }
      }
    ); 
  }
    filterCourses(college:any){
      console.log(college)
    }

}
