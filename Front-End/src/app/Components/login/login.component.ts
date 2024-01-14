import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatDialogRef } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  HttpHeaders } from '@angular/common/http';
import { UserLoginData } from '../../viewModel/user-login-data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../Services/login.service';
import { DialogService } from '../../Services/dialog.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Content-Language': 'ar'
  })
};
  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, MatFormFieldModule, MatInputModule,CommonModule, ReactiveFormsModule,MatSelectModule],
    templateUrl: './login.component.html',
  styleUrl: './login.component.css', 
})
export class LoginComponent  {
  public loginForm!: FormGroup; // variable is created of type FormGroup is created
  show:boolean = false;
  constructor(public ref: MatDialogRef<LoginComponent>, private fb:FormBuilder,private snackbar: MatSnackBar,private loginService: LoginService,private dialogService: DialogService){
    // previnting closing Dialog When Clicking outside The Dialog
    ref.disableClose = true;

    // setting Form groub inputs with initial Value
    this.loginForm = this.fb.group({
      loginPhone: '', 
      loginPassword: ''
    });

  }

  // getting User Data
  gettingloginValue():void {
    this.data = {
      phone: this.loginForm.get('loginPhone')!.value,
      password: this.loginForm.get('loginPassword')!.value,
    }
  }
  
  // adding Required for Form Input Used With Form Groub
  nameFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  
  // Intializing New Array To Holdig User Data
  data: UserLoginData = {
    phone: '', 
    password:''
  }

  // Closing Dialog 
  closeLoginDialog() {
    this.ref.close("canceled!")
  }

  // login Data With User Into The API
  login(): void {
    if (this.loginForm.valid) {
      this.show = true;
      // calling API if Form Data is Valid
      this.loginService.Validatelogin(this.data)
      .subscribe({
        next: res=>{
          localStorage.setItem('userToken',`${res.result.access_token}`);          
          localStorage.setItem('isUserActive',`true`);

          this.dialogService.updateDialogState(true);
          this.show = false;
          this.snackbar.open('تم تسجيل الدخول بنجاح', 'ok', { 'duration': 3000 })
          this.ref.close();
      }, 
      error: ()=> {
        this.snackbar.open('برجاء التأكد من كتابة البيانات بطريقة صحيحة', 'ok', { 'duration': 3000 })
        this.show = false;
      }
    })

    }
    
  }
}
