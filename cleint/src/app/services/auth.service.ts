import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


const apnkiurlLOGIN = 'http://localhost:3000/api/auth/login';
const apnkiurlSIGNUP = 'http://localhost:3000/api/auth/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private isLoggedIn = new BehaviorSubject<boolean>(false)
  currentState = this.isLoggedIn.asObservable();

  private setUserName = new BehaviorSubject<string>('')
  currentUser = this.setUserName.asObservable();

  register(username:any,password:any,email: any):Observable<any>{
    return this.http.post(apnkiurlSIGNUP,{username,password,email})
  }

  login(username:any,password:any):Observable<any>{
    return this.http.post(apnkiurlLOGIN,{username,password})
  }

  setLoggedIn(value: any){
    this.isLoggedIn.next(value);
  }

  setCurrentUser(value: any){
    this.setUserName.next(value);
  }
}
