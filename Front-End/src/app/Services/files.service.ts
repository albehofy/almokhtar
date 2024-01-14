import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  private videoSrc: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public videoSrc$ = this.videoSrc.asObservable();

  updateSrc(src: string): void {
    this.videoSrc.next(src);
  }
}
