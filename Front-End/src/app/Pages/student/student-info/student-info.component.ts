import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfo } from '../../../viewModel/user-info';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Content-Language': 'ar', 
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  })
};

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrl: './student-info.component.css'
})
export class StudentInfoComponent implements OnInit{
  userData:UserInfo = {
    created_at: "",
    email: "",
    id: 14,
    name: "",
    phone: "",
    university: "",
  }
  constructor(private http: HttpClient) {}

gettingStudentData():Observable<any>{
  return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/profile`, httpOptions)
}

  email = 'moreda272@gmail.com'

  ngOnInit(): void {
    this.gettingStudentData().subscribe(res=>{
      this.userData = res.result
      console.log(this.userData)
    })
  }
}

