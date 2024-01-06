import { Component } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  universities:Array<any> = [];
  
  constructor(private fpd:FetchingPublickDataService){
    this.fpd.gettingcollages().subscribe(
      {
        next: res=>{
          this.universities  = res.result.data;
        }
      }
    )
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
