import { Component } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-quran-kareem',
  templateUrl: './quran-kareem.component.html',
  styleUrl: './quran-kareem.component.css'
})
export class QuranKareemComponent {
  message = ''; 
  image = '';
  link ='';
  constructor(private fpd: FetchingPublickDataService){
    this.fpd.gettingSettingData().subscribe({
      next:(res)=>{
        this.image = res.result.files_settings.quran_page_image;  
        console.log(this.image)
        this.message = res.result.general_settings.quran_page_message; 
        this.link = res.result.links.telegram;
      }
    })
  }
}
