// global-event.service.ts

import { Injectable, HostListener, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalEventService {
  public rightClickEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  public f12KeyPressEvent: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  @HostListener('window:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.rightClickEvent.emit(event);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'F12') {
      this.f12KeyPressEvent.emit(event);
    }
  }
}
