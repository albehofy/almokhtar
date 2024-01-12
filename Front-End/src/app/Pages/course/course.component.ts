import { Component } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';
import { ActivatedRoute } from '@angular/router';
import { AddingNewCommentService } from '../../Services/adding-new-comment.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  lessonId: any;
  courseName: string = ''
  panelOpenState = false;
  comments: Array<any> = []
  showAllcomments = true;
  showAllcommentsButton = 'عرض المزيد';
  chapters: Array<any> = [];
  chapterContent: Array<any> = [];
  commentValue: string = ''
  constructor(private route: ActivatedRoute, private fpd: FetchingPublickDataService, private submitComment: AddingNewCommentService) {
    this.lessonId = this.route.snapshot.paramMap.get('id');
    this.fpd.gettingCourse(this.lessonId).subscribe(
      {
        next: res => {
          this.courseName = res.result.name
          this.chapters = res.result.chapters
          this.comments = res.result.comments
        }
      }
    );
  }

  commentsStatus() {
    if (this.showAllcomments) {
      this.showAllcommentsButton = 'عرض اقل';
      this.showAllcomments = false;
    } else {
      this.showAllcommentsButton = 'عرض المزيد';
      this.showAllcomments = true;
    }
  }

  submitNewComment() {
    if(this.commentValue != ''){
      this.submitComment.submitNewComment(
        {
          "comment": this.commentValue,
          "course_id": this.lessonId
        }
      ).subscribe({
        next: (response)=>{
          console.log(response)
        }
      })
    }
  }

 
}
