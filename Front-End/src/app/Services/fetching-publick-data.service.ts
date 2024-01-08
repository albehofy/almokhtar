import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Content-Language': 'en', 
    'Authorization': `Bearer ${localStorage.getItem('userToken')}`
  })
};


@Injectable({
  providedIn: 'root'
})
export class FetchingPublickDataService {

  constructor(private http: HttpClient) {}
    gettingniversities():Observable<any>{
      return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/universities`, httpOptions)
  }
  gettingcollages(university:number):Observable<any>{
    return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/universities/${university}`, httpOptions)
}
gettingCourses(collage:number):Observable<any> {
  return this.http.get<any>(`${environment.basUrl}/api/${environment.version}/colleges/${collage}`, httpOptions)
}
}
