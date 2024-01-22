import { Component } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';
import { ActivatedRoute } from '@angular/router';
import { AddingNewCommentService } from '../../Services/adding-new-comment.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseMessageComponent } from '../../Components/course-message/course-message.component';


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
  commentValue: string = '';
  show: boolean = true;
  courseTelegramLink:string = '';
  constructor(private dialog: MatDialog, private route: ActivatedRoute, private fpd: FetchingPublickDataService, private submitComment: AddingNewCommentService) {
    this.lessonId = this.route.snapshot.paramMap.get('id');
    this.fpd.gettingCourse(this.lessonId).subscribe(
      {
        next: res => {
          this.courseName = res.result.name;
          this.chapters = res.result.chapters;
          this.comments = res.result.comments;
          this.show = false;
          this.courseTelegramLink = res.result.courseTelegramLink== undefined? '':res.result.courseTelegramLink
          console.log(res);
          
        }
      }
    );
  }
  openMessageDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    let _data = this.dialog.open(CourseMessageComponent, {
      width: '60%',
      minWidth: "240px",
      maxWidth: "initial",
      enterAnimationDuration,
      exitAnimationDuration,
    });
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
    if (this.commentValue != '') {
      this.submitComment.submitNewComment(
        {
          "comment": this.commentValue,
          "course_id": this.lessonId
        }
      )
    }
  }

}
