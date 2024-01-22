import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-who-is-us',
  templateUrl: './who-is-us.component.html',
  styleUrl: './who-is-us.component.css'
})
export class WhoIsUSComponent {
  @Input() telegramLink: string = '';
}
