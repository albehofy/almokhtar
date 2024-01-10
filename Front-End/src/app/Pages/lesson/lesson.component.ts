import { Component } from '@angular/core';
import { GlobalEventService } from '../../Services/global-event.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {
  lessonName:string = 'اسم الدرس'
  constructor(private globalEventService:GlobalEventService){
    this.globalEventService.rightClickEvent.subscribe((event) => {
      console.log('Right-click event globally!', event);
      // Your custom logic for right-click goes here
      console.log("event fired form right click");
    });
  
    this.globalEventService.f12KeyPressEvent.subscribe((event) => {
      console.log('F12 key pressed globally!', event);
      console.log("event fired form f12");
      
    });
  }
}
