import { Injectable,EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { UserLoginData } from '../viewModel/user-login-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class LoginService {
  private _islogin: Boolean = false;
  private isDialogOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isUserActive$ = this.isDialogOpenSubject.asObservable();
  public dialogChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Content-Language': 'ar'
    })
  };
  
  constructor(private snackbar: MatSnackBar, private routservice: Router, private http: HttpClient) {}

  
  public emitDialogChange(value: boolean): void {
    this.dialogChangeEvent.emit(value);
  }
  
  get islogin() {
    return this._islogin
  }
  
  set islogin(islogin) {
    this._islogin = islogin;
  }
  
  updateDialogState(isActive: boolean): void {
    this.isDialogOpenSubject.next(isActive);
  }
  
  Validatelogin(data:UserLoginData) {
    return this.http.post<any>(`${environment.basUrl}/api/${environment.version}/login`, data,this.httpOptions)
  }
}
