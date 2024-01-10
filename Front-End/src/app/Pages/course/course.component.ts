import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  lessonId: number | any;
  lessonName: string = ''; 
  show:boolean = true;// for loading
  lessons: Array<any> = [
    {
      created_at: "",
      description: "",
      id: 0,
      name: "",
      updated_at: ""
    }
  ]; 

  constructor(private route: ActivatedRoute, private fpd: FetchingPublickDataService) {
    this.lessonId = this.route.snapshot.paramMap.get('id');
    this.fpd.gettingCourse(this.lessonId).subscribe(
      {
        next: res => {
          this.lessons = res.result.colleges;
          this.lessonName = res.result.name; 
          this.show = false; 
          console.log(res)
        }
      }
    );
  }
  panelOpenState = false;
  course = ["الاول","الثانى","الثالث","الرابع","الخامس","السادس","السابع"]
  // lessons = ["الدرس الاول","الدرس الثانى","الدرس الثالث","الدرس الرابع","الدرس الخامس","الدرس السادس","الدرس السابع"]
  commentsLength = 3; 
  comments = [1,2,3,4,5,6,7,8,9,10]
  showAllcomments(){
    this.commentsLength = this.comments.length; 
  }
}
