import { Component } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';
import { DialogService } from '../../Services/dialog.service';

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
  constructor(private fbd:FetchingPublickDataService, private dialogService: DialogService) {
    this.dialogService.isDialogOpen$.subscribe(res => {
      localStorage.setItem('isUserActive', `${res}`);
    })
    
    this.fbd.gettingniversities()
    .subscribe(
      {next: res=>{
        this.universities = res.result.data; 
      }
     }
    )
  }
}
