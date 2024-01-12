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
export class UpdatingPsswordService {
  constructor(private http: HttpClient) {}



  updatingPassword(data:any):Observable<any>{
    return this.http.put<any>(`${environment.basUrl}/api/${environment.version}/password`,data, httpOptions)
  }
}
