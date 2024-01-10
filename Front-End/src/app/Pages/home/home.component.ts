import { Component, EventEmitter, HostListener } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  universities:Array<any> = [];
  collages:Array<any> = [];
  courses:Array<any> = [];
  isUniveritySelected:boolean = false; 
  isCollageSelected:boolean = false; 
  isCourseSelected:boolean = false; 


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


  constructor(private fpd:FetchingPublickDataService){
    this.fpd.gettingniversities().subscribe(
      {
        next: res=>{
          this.universities  = res.result.data;
          console.log(this.universities)
        }
      }
    )
  }
  selectUniversity(event:any){
    this.isUniveritySelected = true;
    this.fpd.gettingcollages(event.target.value).subscribe(
      {
        next: res=>{
          this.collages  = res.result.colleges;
          console.log(this.collages)
        }
      }
    );
  }
  selectCollage(event:any) {
    this.isCollageSelected = true;
    this.fpd.gettingCourses(event.target.value).subscribe(
      {
        next: res=>{
          this.courses  = res.result.courses;
          console.log(this.courses)
        }
      }
    );
  }
  selectCourse(event:any){
    this.isCourseSelected = true;
  }
  data = {
    header: {
      address: `اكاديمية المختار متخصصون فى شرح المناهج الجامعية `,
      linkTitle: "بادر بالحجز الان", 
      background: '/assets/images/slider-2.jpg'
    },
    mainForm: {
      address: "سجل معنا الان",
      universties: [{
        name: "university 1",
        value: "0"
      }, {
        name: "university 2",
        value: "1"
      },
      {
        name: "university 3",
        value: "2"
      }], 
      collages:  [{
        name: "collage 1",
        value: "0"
      }, {
        name: "collage 2",
        value: "1"
      },
      {
        name: "collage 3",
        value: "2"
      }], 
      courses:  [{
        name: "module 1",
        value: "0"
      }, {
        name: "module 2",
        value: "1"
      },
      {
        name: "module 3",
        value: "2"
      }], 
      telegram:{
        title:'تواصل مع المشرفين', 
        link:'telegram-link'
      }
    }
  }
background: any;
myVariable: boolean = true;

  ngOnInit() {
    // تفقد عندما يتم تغيير القيمة باستخدام أدوات تفتيش
    this.checkInspect();

    // استمع لتغييرات في قيمة المتغير
    this.myVariable = true; // قيمة الافتراضية
    console.log(this.myVariable); // إذا كانت قيمة true

    this.rightClickEvent.subscribe((event) => {
      console.log('Right-click event globally!', event);
      // Your custom logic for right-click goes here
    });

    this.f12KeyPressEvent.subscribe((event) => {
      console.log('F12 key pressed globally!', event);
      // Your custom logic for F12 key press goes here
    });

    this.windowResizeEvent.subscribe((event) => {
      console.log('resize pressed globally!', event);
      // Your custom logic for F12 key press goes here
    });
  }

  checkInspect() {
    // Assuming you have a way to detect if DevTools are open
    if (this.isDevToolsOpen()) {
      this.myVariable = false;
    }
  }
  private isDevToolsOpen(): boolean {
    // Your logic to detect DevTools state here
    return false; // Placeholder, replace with actual detection
  }
  
  
}
