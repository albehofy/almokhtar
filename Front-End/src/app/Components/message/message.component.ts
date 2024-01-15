import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  constructor(public ref: MatDialogRef<MessageComponent>){}
  closeMessageDialog() {
    this.ref.close("canceled!")
  }
}
