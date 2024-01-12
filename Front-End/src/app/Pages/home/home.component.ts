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
  
}
