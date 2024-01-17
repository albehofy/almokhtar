import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharePriceService } from '../../Services/share-price.service';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-subscripe',
  templateUrl: './subscripe.component.html',
  styleUrl: './subscripe.component.css'
})
export class SubscripeComponent {
  price = 0; 
  telegramLink = ''
  constructor(private fpd:FetchingPublickDataService,public ref: MatDialogRef<SubscripeComponent>,private spc: SharePriceService){
    this.fpd.gettingSettingData().subscribe({
      next:(res)=>{
        this.telegramLink = res.result.links.telegram; 
      }
    });
    this.spc.price$.subscribe({
      next: res=>{
        this.price = res
      }
    }) 
  }
  closeLoginDialog() {
    this.ref.close("canceled!")
  }
}
