import { Component, EventEmitter, HostListener } from '@angular/core';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';
import { MessageComponent } from '../../Components/message/message.component';
import { SubscripeComponent } from '../../Components/subscripe/subscripe.component';
import { MatDialog } from '@angular/material/dialog';
import { SharePriceService } from '../../Services/share-price.service';
import { GeneralSettingsService } from '../../Services/general-settings.service';

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
  prcie = 0;
  links:any = {};
  reviews = []; 
  Preferred: any = [{
    id: 100,
    name: '', 
    college: {
      "name": ''
    }, 
    university: {
      name : ''
    }, 
    description: '', 
    price: '', 
    iamge: ''
  }];

  constructor(private gs: GeneralSettingsService,private fpd:FetchingPublickDataService, private dialog: MatDialog, private spc: SharePriceService){
    this.fpd.gettingReviews().subscribe(
      {
        next: (response)=>{
          this.reviews = response.result.data;
          response.result.data.forEach((review: any) =>{
            review.message = review.message != null ? review.message : ''; 
            console.log(review);
          })
          console.log(this.reviews)
        }
      }
    )
    // preferd courses
    this.fpd.gettingPreferredCourses().subscribe({
      next: (res)=>{
        this.Preferred = res.result.data;
      }
    })
    this.fpd.gettingniversities().subscribe(
      {
        next: res=>{
          this.universities  = res.result.data;
        }
      }
    ); 

    this.fpd.gettingSettingData().subscribe({
      next:(res)=>{
        this.links = res.result.links; 
      }
    }); 


  }

  openSubscripeDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    let _data = this.dialog.open(SubscripeComponent, {
      width: '60%',
      minWidth: "240px",
      maxWidth: "initial",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openMessageDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    let _data = this.dialog.open(MessageComponent, {
      width: '60%',
      minWidth: "240px",
      maxWidth: "initial",
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  
  selectUniversity(event:any){
    this.isUniveritySelected = true;
    this.fpd.gettingcollages(event.target.value).subscribe(
      {
        next: res=>{
          this.collages  = res.result.colleges;
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
        }
      }
    );
  }

  selectCourse(event:any){
    this.isCourseSelected = true;
    this.fpd.gettingCourse(event.target.value).subscribe({
      next: (res)=>{
        this.prcie = res.result.price; 
        this.spc.updateDialogState(res.result.price); 
      }
    })
    
  }
  
}
