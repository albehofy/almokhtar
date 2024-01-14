import { Component } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  links:any = {}
constructor(private fpd: FetchingPublickDataService){
  this.fpd.gettingSettingData().subscribe({
    next:(res)=>{
      this.links = res.result.links; 
      console.log(this.links)
    }
  }); 
}
}
