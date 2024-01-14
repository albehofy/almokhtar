import { Injectable } from '@angular/core';
import { FetchingPublickDataService } from './fetching-publick-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralSettingsService {

  // links:any; 
  // files = {}; 
  // general = {};
  // constructor(private fpd: FetchingPublickDataService) {
  //   this.fpd.gettingSettingData().subscribe({
  //     next: (res) => {
  //       this.links = res.result.links
  //     }
  //   });
    
  //   this.fpd.gettingSettingData().subscribe({
  //     next: (res) => {
  //       this.files = res.result.files_settings
  //     }
  //   }); 
    
  //   this.fpd.gettingSettingData().subscribe({
  //     next: (res) => {
  //       this.general = res.result.general_settings
        
  //     }
  //   })
  // }
}
