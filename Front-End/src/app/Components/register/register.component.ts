import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common'; // Import CommonModule
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserRegData } from '../../viewModel/user-reg-data';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../../Services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FetchingPublickDataService } from '../../Services/fetching-publick-data.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  public registerForm!: FormGroup; // variable is created of type FormGroup is created
  show:boolean = false;
  universities:Array<any>=[];
  constructor(private ref: MatDialogRef<RegisterComponent>,private fpd:FetchingPublickDataService, private fb: FormBuilder, private http: HttpClient, private register:RegisterService,private snackbar: MatSnackBar) {
    // getting Universities
    this.fpd.gettingniversities().subscribe(
      {
        next: res=>{
          this.universities  = res.result.data;
          console.log(this.universities)
        }
      }
    )

    // Preventing Closing Dialog When Clicking Outside Dialog
    ref.disableClose = true;

    this.registerForm = this.fb.group({
      fullName: '',
      phoneNumber: '',
      university: '',
      password: ''
    });
  }

  // intializing Data For Reciving User Data
  data: UserRegData = {
    name: '',
    phone: '',
    university: '',
    password: ''
  }

  // Checking From Data
  nameFormControl = new FormControl('', [Validators.required]);
  collageFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  
  // closing Dialog when clicking  cancle
  closeRegisterDialog() {
    this.ref.close()
  }

  // getting Data From Input 
  gettingFormValues():void{
    this.data = {
      name: this.registerForm.get('fullName')!.value,
      phone: this.registerForm.get('phoneNumber')!.value,
      university: this.registerForm.get('university')?.value,
      password: this.registerForm.get('password')?.value
    }
    console.log(this.data)
  }
 logger(){
  console.log(this.registerForm.get('university'))
 }
  onSubmit(): void {
    if (this.registerForm.valid) {
      this.show = true;
      // calling API if The Form Data is Valid
      this.register.addingNewUser(this.data)
      .subscribe({
        next: () => {
      this.show = false;
          this.snackbar.open('تم انشاء السحاب بنجاح', 'ok', { 'duration': 3000 })
        },
        error: (e) => {
      this.show = false;
      this.snackbar.open('عذرا حدث خطأ, برجاء التأكد من البيانات والمحاولة مرة اخرى', 'ok', { 'duration': 3000 })

        },
        complete: () => console.info('complete')
      })
      
    }else {
      this.snackbar.open('برجاءالتأكد من كتابة البيانات بشكل صحيح', 'ok', { 'duration': 3000 })
    }
  }
}