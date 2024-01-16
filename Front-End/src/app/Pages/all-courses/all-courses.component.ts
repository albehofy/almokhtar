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
  courses:Array<any> = [{
    name: 'name', 
    price: 250,
  }]
  show: boolean = true; 
  constructor(private fpd:FetchingPublickDataService){
    this.fpd.gettingniversities().subscribe(
      {
        next: res=>{
          this.universities  = res.result.data;
          console.log(this.universities)
        }
      }
    ); 
    this.fpd.gettingAllCourses().subscribe({
      next:(res)=>{
        this.courses= res.result.data;
      }
    })
  }
    filterCourses(college:any){
    this.universityId = college.target.value
    if(this.universityId != "-1")  {
      console.log(college)
    this.fpd.gettingcollages(this.universityId).subscribe({
      next:(res)=>{
        this.courses= res.result;
        console.log(this.courses); 
        this.show = false;
      }
    })
    }else{
        this.fpd.gettingAllCourses().subscribe({
      next:(res)=>{
        this.courses= res.result.data;
        this.show = false;
      }
    })
    }
    }

}
