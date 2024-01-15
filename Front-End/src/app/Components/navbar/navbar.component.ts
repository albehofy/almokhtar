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
  toggleNavbar = false; 
  isUserActive = JSON.parse(localStorage.getItem('isUserActive') || '{}')
  constructor(private dialog: MatDialog, private loginService: LoginService, private dialogService: DialogService) {
    this.isUserActive = JSON.parse(localStorage.getItem('isUserActive') || '{}')
    this.dialogService.isDialogOpen$.subscribe(res => {
      localStorage.setItem('accessToken',`${res}`)
      this.isUserActive =  localStorage.getItem('isUserActive')
    })
  }
  openRegisterDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(RegisterComponent, {
      width: '60%',
      minWidth: "240px",
      maxWidth: "initial",
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }
  openLogginDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '60%',
      minWidth: "250px",
      maxWidth: "initial",
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }
}
