import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-couse-message',
  templateUrl: './course-message.component.html',
  styleUrl: './course-message.component.css'
})
export class CourseMessageComponent {
  telegramLink:string = '';
  constructor(private fpd:FetchingPublickDataService, public ref: MatDialogRef<CourseMessageComponent>){
    this.fpd.gettingSettingData().subscribe({
      next:(res)=>{
        this.telegramLink = res.result.links.telegram; 
      }
    })
  }
  closeMessageDialog() {
    this.ref.close("canceled!")
  }
}
