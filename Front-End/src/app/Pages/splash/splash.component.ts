import { Component } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent {
  universities= [
    {
      created_at:"",
      description:"",
      id:0, 
      name: "",
      updated_at: ""
    }
  ]
  logo:string = '';

  constructor(private fbd:FetchingPublickDataService) {
    this.fbd.gettingSettingData().subscribe({       
      next:(res)=>{
        this.logo = res.result.files_settings.site_logo;
      }
    } 
    )
    this.fbd.gettingniversities()
    .subscribe(
      {next: res=>{
        this.universities = res.result.data; 
      }
     }
    )
  }
}
