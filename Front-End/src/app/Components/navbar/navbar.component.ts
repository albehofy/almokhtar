import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../../Services/login.service';
import { DialogService } from '../../Services/dialog.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isUserActive: boolean = false;

  constructor(private dialog: MatDialog, private loginService: LoginService, private dialogService: DialogService) {
    this.dialogService.isDialogOpen$.subscribe(res => {
      this.isUserActive = res;
    })
  }
  openRegisterDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    let _data = this.dialog.open(RegisterComponent, {
      width: '60%',
      minWidth: "240px",
      maxWidth: "initial",
      enterAnimationDuration,
      exitAnimationDuration,
    });
    _data.afterClosed().subscribe(item => {
      console.log(item)
    })
  }
  openLogginDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '60%',
      minWidth: "250px",
      maxWidth: "initial",
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed:', result);
    });
  }
}
