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
  insiderShow:boolean = false;
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
        this.show = false;
      }
    })
  }
  filterCoursesByUniversity(college:any){
    this.universityId = college.target.value; 
    this.insiderShow = true; 
    if(this.universityId != "-1")  {
    this.fpd.gettingcollages(this.universityId).subscribe({
      next:(res)=>{
        this.courses= res.result.courses;
        // this.show = false;
        this.insiderShow = false; 
      }
    })
    }else{
        this.fpd.gettingAllCourses().subscribe({
      next:(res)=>{
        this.courses= res.result.data;
        this.insiderShow = false;
      }
    })
    }
    }

    // filterCoursesByName(searchTerm:string) {
    //   return this.courses.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    // }

}
