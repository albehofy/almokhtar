import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharePriceService } from '../../Services/share-price.service';

@Component({
  selector: 'app-subscripe',
  templateUrl: './subscripe.component.html',
  styleUrl: './subscripe.component.css'
})
export class SubscripeComponent {
  price = 0; 
  constructor(public ref: MatDialogRef<SubscripeComponent>,private spc: SharePriceService){
    this.spc.price$.subscribe({
      next: res=>{
        this.price = res
      }
    }) 
  }
  closeLoginDialog() {
    this.ref.close("canceled!")
  }
  telegramLink = ''
}
