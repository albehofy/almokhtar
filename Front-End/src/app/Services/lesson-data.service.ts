import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonDataService {
  private lessonSrc: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public lessonSrc$ = this.lessonSrc.asObservable();

  constructor() { }

  updateDialogState(src: string): void {
    this.lessonSrc.next(src);
  }
}
 