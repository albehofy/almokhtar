import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-couse-message',
  templateUrl: './course-message.component.html',
  styleUrl: './course-message.component.css'
})
export class CourseMessageComponent {
  constructor(public ref: MatDialogRef<CourseMessageComponent>){}
  closeMessageDialog() {
    this.ref.close("canceled!")
  }
}
