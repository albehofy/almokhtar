import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddingNewCommentService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Content-Language': 'ar', 
      'Authorization': `Bearer ${localStorage.getItem('userToken')}`
    })
  };

  constructor(private http: HttpClient) { }
  submitNewComment(data: any) {
    return this.http.post<any>(`${environment.basUrl}/api/${environment.version}/comments`, data, this.httpOptions)
  }
}
