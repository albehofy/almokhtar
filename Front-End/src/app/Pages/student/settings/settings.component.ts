import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  // FormControl,
  // Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GettingUserDataService } from '../../../Services/getting-user-data.service';
import { UserInfo } from '../../../viewModel/user-info';
import { UpdateUserService } from '../../../Services/update-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdatingPsswordService } from '../../../Services/updating-pssword.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  public edittingUserdata!: FormGroup;
  public edittingUserPass: FormGroup;
  result: UserInfo = {
    created_at: "",
    email: "",
    id: 0,
    name: "",
    phone: "",
    university: "",
  }

  passwordsValues = {
    current_password: '',
    password: '',
    password_confirmation: ''
  }
  constructor(private fb: FormBuilder, private uD: GettingUserDataService, private updatingData: UpdateUserService, private updatePassword: UpdatingPsswordService, private snackbar: MatSnackBar) {
    this.uD.fetchingApi().subscribe(res => {
      this.result = res.result;
      console.log(this.result)
    })
    // intializing User Personal Data for FormGroup
    this.edittingUserdata = this.fb.group({
      name: '',
      phone: '',
      university: '',
      email: ''
    });

    this.edittingUserPass = this.fb.group({
      oldPassword: ['',[Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });

  }
  isPasswordConffirmed: boolean = true;

  updatingPersonalData(): void {
    if (this.edittingUserdata.valid) {
      // console.log(this.data)
      console.log(`${this.result.email}`)
      this.updatingData.updatingUserData({
        name: this.result.name,
        phone: this.result.phone,
        university: this.result.university,
        email: this.result.email
      }).subscribe({
        next: (res) => {
          console.log(res)
          this.snackbar.open('تم تحديث البيانات بنجاح', 'ok', { 'duration': 3000 })
        }
      })
    }
  }

  // Custom validator function
  passwordMatchValidator(control: AbstractControl) {
    const newPassword = control.get('newPassword')!.value;
    const confirmPassword = control.get('confirmPassword')!.value;
    return newPassword === confirmPassword ? null : { 'passwordMismatch': true };
  }
  
  updatingPassword() {
    if (this.edittingUserPass.valid) {
      console.log(this.passwordsValues)
      // Perform actions when the form is submitted
      this.updatePassword.updatingPassword(this.passwordsValues).subscribe({
        next:(res)=>{console.log(res)}, 
        error:(err)=>{console.log(err)}, 

      })
    }
  }

}
