import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrl: './university.component.css'
})
export class UniversityComponent {
  userId: number | any;
  universityName: string = ''; 
  show:boolean = true;// for loading
  colleges: Array<any> = [
    {
      created_at: "",
      description: "",
      id: 0,
      name: "",
      updated_at: ""
    }
  ]; 
  constructor(private route: ActivatedRoute, private fpd: FetchingPublickDataService) {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.fpd.gettingcollages(this.userId).subscribe(
      {
        next: res => {
          this.colleges = res.result.colleges;
          this.universityName = res.result.name; 
          this.show = false
        }
      }
    );
  }

}
