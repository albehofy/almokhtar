import { Component } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-chat-icon',
  templateUrl: './chat-icon.component.html',
  styleUrl: './chat-icon.component.css'
})
export class ChatIconComponent {
  telegramLink : string =''
  whatsapp:string=''; 
  constructor(private fpd:FetchingPublickDataService){
    this.fpd.gettingSettingData().subscribe({
      next:(res)=>{
        this.telegramLink = res.result.links.telegram;
        this.whatsapp = res.result.general_settings.whatsapp_number
      }
    });
  }
}
