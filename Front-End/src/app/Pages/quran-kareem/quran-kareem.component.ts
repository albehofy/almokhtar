import { Component } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-quran-kareem',
  templateUrl: './quran-kareem.component.html',
  styleUrl: './quran-kareem.component.css'
})
export class QuranKareemComponent {
  message:string = ''; 
  image:string = '';
  link:string ='';
  show: Boolean = true; 
  name:string = ''; 
  description: string = ''; 
  telegramLinkContacts:string= '';
  constructor(private fpd: FetchingPublickDataService){
    this.fpd.gettingSettingData().subscribe({
      next:(res)=>{
        this.telegramLinkContacts = res.result.general_settings.reservation_number;
        this.name =  res.result.general_settings.site_name; 
        this.description = res.result.general_settings.site_description
        this.image = res.result.files_settings.quran_page_image;  
        this.message = res.result.general_settings.quran_page_message; 
        this.link = res.result.links.telegram;
        this.show = false; 
      }
    })
  }
}
