import { Component } from '@angular/core';
import { GettingUserDataService } from '../../Services/getting-user-data.service';
import { DialogService } from '../../Services/dialog.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  result = '';
  constructor( private uD: GettingUserDataService,  private dialogService: DialogService) {
    this.uD.fetchingApi().subscribe(res => {
      this.result = res.result;
      console.log(this.result)
    }); 
    
  }

  logout() {
    // throw new Error('Method not implemented.');
    console.log(localStorage.getItem('accessToken')); 
    localStorage.clear(); 
    this.dialogService.isDialogOpen$.subscribe(res => {
      console.log(res)
   })
  }
}
