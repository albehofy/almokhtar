import { Component, Output, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { GettingUserDataService } from '../../../Services/getting-user-data.service';
import { UserInfo } from '../../../viewModel/user-info';
import { UpdateUserService } from '../../../Services/update-user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdatingPsswordService } from '../../../Services/updating-pssword.service';
import { FetchingPublickDataService } from '../../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  @Output() newItemEvent = new EventEmitter<string>();  
  public edittingUserdata!: FormGroup;
  public edittingUserPass: FormGroup;
  universities:Array<any> = [];
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
  constructor(private fpd:FetchingPublickDataService, private fb: FormBuilder, private uD: GettingUserDataService, private updatingData: UpdateUserService, private updatePassword: UpdatingPsswordService, private snackbar: MatSnackBar) {
    this.uD.fetchingApi().subscribe(res => {
      this.result = res.result;
      this.setName(res.result.name)
    })
    this.fpd.gettingniversities().subscribe(
      {
        next: res=>{
          this.universities  = res.result.data;
        }
      }
    ); 
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

  setName(value: string) {
    this.newItemEvent.emit(value);
  }
  selectUniversity(a:any){}
  updatingPersonalData(): void {
    if (this.edittingUserdata.valid) {
      this.updatingData.updatingUserData({
        name: this.result.name,
        phone: this.result.phone,
        university: this.result.university,
        email: this.result.email
      }).subscribe({
        next: (res) => {
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
      // Perform actions when the form is submitted
      this.updatePassword.updatingPassword(this.passwordsValues)
    }
  }

}
