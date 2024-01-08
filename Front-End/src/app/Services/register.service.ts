import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { UserRegData } from '../viewModel/user-reg-data';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Content-Language': 'ar'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient) { }

  addingNewUser(data:UserRegData):Observable<any>{
    return this.http.post<any>(`${environment.basUrl}/api/${environment.version}/register`, data, httpOptions)
  }
}
