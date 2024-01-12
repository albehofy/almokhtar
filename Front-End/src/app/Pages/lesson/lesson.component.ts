import { Component, EventEmitter, HostListener, Input } from '@angular/core';
import { GlobalEventService } from '../../Services/global-event.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {
  videoSrc = 'https://back.almokhtarcourses.com/storage/initializing/sample-video.mp4';
  lessonName: string = 'اسم الدرس'
  public rightClickEvent: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  public f12KeyPressEvent: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
  public windowResizeEvent: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('window:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.rightClickEvent.emit(event);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'F12' || event.key === 'ctrl+shift+i') {
      this.f12KeyPressEvent.emit(event);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.key === 'F12' || event.key === 'ctrl+shift+i') {
      this.windowResizeEvent.emit(event);
    }
  }



  myVariable: boolean = true;

  ngOnInit() {
    // تفقد عندما يتم تغيير القيمة باستخدام أدوات تفتيش
    this.checkInspect();

    // استمع لتغييرات في قيمة المتغير
    this.myVariable = true; // قيمة الافتراضية
    console.log(this.myVariable); // إذا كانت قيمة true

    this.rightClickEvent.subscribe((event) => {
      this.videoSrc=''
      console.log('Right-click event globally!', event);
      // Your custom logic for right-click goes here
    });

    this.f12KeyPressEvent.subscribe((event) => {
      console.log('F12 key pressed globally!', event);
      this.videoSrc=''

      // Your custom logic for F12 key press goes here
    });

    this.windowResizeEvent.subscribe((event) => {
      console.log('resize pressed globally!', event);
      this.videoSrc=''

      // Your custom logic for F12 key press goes here
    });
  }

  checkInspect() {
    // Assuming you have a way to detect if DevTools are open
    if (this.isDevToolsOpen()) {
      this.myVariable = false;
      this.videoSrc=''

    }
  }
  private isDevToolsOpen(): boolean {
    // Your logic to detect DevTools state here
    return false; // Placeholder, replace with actual detection
  }

}
