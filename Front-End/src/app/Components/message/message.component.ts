import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  telegramLink:string ='';
  constructor(private fpd:FetchingPublickDataService,public ref: MatDialogRef<MessageComponent>){
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
