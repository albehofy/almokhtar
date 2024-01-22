import { Component } from '@angular/core';
import { GettingUserDataService } from '../../Services/getting-user-data.service';
import { DialogService } from '../../Services/dialog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  result = '';
  name:string=''; 
  image:string = ''
  id:string =''
  constructor(private dialog:DialogService ,private router: Router, private uD: GettingUserDataService,  private dialogService: DialogService) {
    if(localStorage.getItem('isUserActive')!= 'true'){
          this.router.navigate(['/home'])
        }else{
          this.uD.fetchingApi().subscribe(res => {
            this.result = res.result;
            this.name = res.result.name;
            this.id = res.result.id
            this.image = res.result.image
          }); 
        }
      }
  
 
  
  logout() {
    // throw new Error('Method not implemented.');
    localStorage.clear(); 
    this.dialogService.updateDialogState(false)
  }
}
