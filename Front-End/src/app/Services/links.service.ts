import { Injectable } from '@angular/core';
import { FetchingPublickDataService } from './fetching-publick-data.service';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  links = {}
  constructor(private fpd: FetchingPublickDataService) { 
        this.fpd.gettingSettingData().subscribe({
          next:(res)=>{
            this.links = res.result.links
          }
        })
  }
  
}
