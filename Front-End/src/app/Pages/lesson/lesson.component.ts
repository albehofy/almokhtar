import { Component, EventEmitter, HostListener, Input } from '@angular/core';
import { GlobalEventService } from '../../Services/global-event.service';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';
import { ActivatedRoute } from '@angular/router';
import { LessonDataService } from '../../Services/lesson-data.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {
  lesson = {
    name: '', 
    videoSrc:''
  };
  show: boolean = true; 
  videoSrc = '';
  lessonName: string = ''


  public rightClickEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  public f12KeyPressEvent: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
  public windowResizeEvent: EventEmitter<any> = new EventEmitter<any>();

  lessonId: any;
  constructor(private lds: LessonDataService, private route: ActivatedRoute, private fpd: FetchingPublickDataService) {
    this.lessonId = this.route.snapshot.paramMap.get('id');
    this.fpd.gettingLesson(this.lessonId).subscribe(
      {
        next: res => {
          this.lesson ={
            name:  res.result.name, 
            videoSrc: res.result.video 
          }
          this.lds.updateDialogState(`${res.result.video}`)
          this.lessonName = res.result.name; 
          this.videoSrc = res.result.video;
          this.show = false;
        }
      }
    );

  }


  @HostListener('window:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.rightClickEvent.emit(event);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'F12' || event.key === 'ctrl+shift+i') {
      event.preventDefault();
      this.f12KeyPressEvent.emit(event);
    }
  }

}
