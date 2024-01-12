import { Component } from '@angular/core';
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
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { RequestingNewCourseService } from '../../Services/requesting-new-course.service';

@Component({
  selector: 'app-request-new-course',
  templateUrl: './request-new-course.component.html',
  styleUrl: './request-new-course.component.css',
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule],
})
export class RequestNewCourseComponent {
  userId: any;
  public requestNewCourse!: FormGroup; // variable is created of type FormGroup is created
  show: boolean = false;
  allSelectedFiels:any;
  files:any = [];

  constructor(private fb: FormBuilder, private rnc: RequestingNewCourseService, private http: HttpClient, private snackbar: MatSnackBar, private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.requestNewCourse = this.fb.group({
      fullName: '',
      phoneNumber: '',
      university_name: '',
      college_name: '',
      course_name: '',
      files: []
    });
  }

  // intializing Data For Reciving User Data
  data = {
    name: '',
    phone: '',
    university_name: '',
    college_name: '',
    course_name: '',
    files: []
  }

  // Checking From Data
  nameFormControl = new FormControl('', [Validators.required]);
  collageFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  courseNameFormControl = new FormControl('', [Validators.required]);

  selectedFile: any = [{ name: "اضافة الملفات" }];

  onFileSelected(event: any): void {
    // this.selectedFile = event.target.files[0] ?? null;
    this.allSelectedFiels = event.target.files;
    console.log(event.target.files); 
    for(let i = 0; i<this.allSelectedFiels.length; i++){
      this.files.push(this.allSelectedFiels[i]); 
      console.log(this.files)    
    }
  }

    // getting Data From Input 
    gettingFormValues(): void {
      this.data = {
        name: this.requestNewCourse.get('fullName')!.value,
        phone: this.requestNewCourse.get('phoneNumber')!.value,
        university_name: this.requestNewCourse.get('university_name')?.value,
        college_name: this.requestNewCourse.get('college_name')?.value,
        course_name: this.requestNewCourse.get('course_name')?.value,
        files: this.files
      }
    }
  onSubmit(): void {
    if (this.requestNewCourse.valid) {
      console.log(this.data)
      this.show = false;
      // calling API if The Form Data is Valid
      this.rnc.requestingNewCourse(this.data)
        .subscribe({
          next: () => {
            this.show = false;
            this.snackbar.open('تم ارسال الطلب بنجاح', 'ok', { 'duration': 3000 })
          },
          error: (e) => {
            this.show = false;
            this.snackbar.open('عذرا حدث خطأ, برجاء التأكد من البيانات والمحاولة مرة اخرى', 'ok', { 'duration': 3000 })

          }        })

    } else {
      this.snackbar.open('برجاءالتأكد من كتابة البيانات بشكل صحيح', 'ok', { 'duration': 3000 })
    }
  }
}
