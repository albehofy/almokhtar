import { Component } from '@angular/core';
import { UserInfo } from '../../../viewModel/user-info';
import { GettingUserDataService } from '../../../Services/getting-user-data.service';


@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css'
})
export class ControlPanelComponent {
  user:UserInfo = {
    created_at: "",
    email: "",
    id: 14,
    name: "",
    phone: "",
    university: "",
  }
  constructor(private userData:GettingUserDataService) {
    this.userData.fetchingApi().subscribe(res=>{
      this.user = res.result; 
      console.log(this.user)
    })
  }

}
