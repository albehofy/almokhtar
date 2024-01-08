import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private isDialogOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isDialogOpen$ = this.isDialogOpenSubject.asObservable();

  constructor() { }

  updateDialogState(isOpen: boolean): void {
    this.isDialogOpenSubject.next(isOpen);
  }
}
