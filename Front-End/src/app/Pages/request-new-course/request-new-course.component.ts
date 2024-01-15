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
import { FileUploadService } from '../../Services/file-upload.service';

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
  files: Array<any> = [];
  // files:any = [];

  constructor(private fileUploadService: FileUploadService,private fb: FormBuilder, private rnc: RequestingNewCourseService, private http: HttpClient, private snackbar: MatSnackBar, private route: ActivatedRoute) {
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
  data: {
    name: string;
    phone: string;
    university_name: string;
    college_name: string;
    course_name: string;
    files: File[];
  }= {
    name: '',
    phone: '',
    university_name: '',
    college_name: '',
    course_name: '',
    files: [],
  };

  // Checking From Data
  nameFormControl = new FormControl('', [Validators.required]);
  collageFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('', [Validators.required]);
  courseNameFormControl = new FormControl('', [Validators.required]);

    // getting Data From Input 
    gettingFormValues(): void {
      this.data = {
        name: this.requestNewCourse.get('fullName')!.value,
        phone: this.requestNewCourse.get('phoneNumber')!.value,
        university_name: this.requestNewCourse.get('university_name')?.value,
        college_name: this.requestNewCourse.get('college_name')?.value,
        course_name: this.requestNewCourse.get('course_name')?.value,
        files: this.files,
      };
    }
    

    onSubmit(): void {
      if (this.requestNewCourse.valid) {
        this.show = false;
    
        const formData = new FormData();
    
        formData.append('name', this.requestNewCourse.get('fullName')!.value);
        formData.append('phone', this.requestNewCourse.get('phoneNumber')!.value);
        formData.append('university_name', this.requestNewCourse.get('university_name')?.value);
        formData.append('college_name', this.requestNewCourse.get('college_name')?.value);
        formData.append('course_name', this.requestNewCourse.get('course_name')?.value);
    
        for (let i = 0; i < this.files.length; i++) {
          formData.append('files[]', this.files[i], this.files[i].name);
        }
    
        this.rnc.requestingNewCourse(formData)
          .subscribe({
            next: () => {
              this.show = false;
              this.snackbar.open('تم ارسال الطلب بنجاح', 'ok', { 'duration': 3000 });
            },
            error: (e) => {
              this.show = false;
              this.snackbar.open('عذرا حدث خطأ, برجاء التأكد من البيانات والمحاولة مرة اخرى', 'ok', { 'duration': 3000 });
            }
          });
    
      } else {
        this.snackbar.open('برجاء التأكد من كتابة البيانات بشكل صحيح', 'ok', { 'duration': 3000 });
      }
    }
    

  onFileSelected(event: any) {
    const files = event.target.files;
  
    if (files.length) {
      this.files = [...files];
      }
  }
  
  
  


}
