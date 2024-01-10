import { Component } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collage',
  templateUrl: './collage.component.html',
  styleUrl: './collage.component.css'
})
export class CollageComponent {
  userId:number | any; 
  collegeName:string = '';
  courses:Array<any> = [{
    name:'', 
    id : 0
  }]; 
  constructor(private fpd: FetchingPublickDataService, private route: ActivatedRoute){
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId)
    this.fpd.gettingCourses(this.userId).subscribe(
      {
        next: res=>{
          this.courses  = res.result.courses;
          this.collegeName = res.result.name
          console.log(res.result)
        }
      }
    );
  }
  
}
