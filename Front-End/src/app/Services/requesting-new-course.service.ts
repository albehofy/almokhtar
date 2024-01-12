import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestingNewCourseService {

  constructor(private http: HttpClient) { }
  requestingNewCourse(data: any): Observable<any> {
    return this.http.post<any>(`${environment.basUrl}/api/${environment.version}/other-options`, data)
  }
}
