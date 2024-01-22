import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Content-Language': 'ar', 
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(private http: HttpClient) {}

  updatingUserData(data:any):Observable<any>{
    return this.http.put<any>(`${environment.basUrl}/api/${environment.version}/profile`,data, httpOptions)
  }
  
  updatingUserImage(image:any):Observable<any>{
    return this.http.post<any>(`${environment.basUrl}/api/${environment.version}/profile/image`,image, httpOptions)
  }
}
