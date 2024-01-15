import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-video-subscribe-message',
  templateUrl: './video-subscribe-message.component.html',
  styleUrl: './video-subscribe-message.component.css'
})
export class VideoSubscribeMessageComponent {
  constructor(public ref: MatDialogRef<VideoSubscribeMessageComponent>){}
  closeMessageDialog() {
    this.ref.close("canceled!")
  }
}
