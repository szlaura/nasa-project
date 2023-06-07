import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


const apiUrlLOGIN = 'http://localhost:3000/api/auth/login';
const apiUrlSIGNUP = 'http://localhost:3000/api/auth/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private isLoggedIn = new BehaviorSubject<boolean>(false)
  currentState = this.isLoggedIn.asObservable();

  register(username:any,password:any,email: any):Observable<any>{
    return this.http.post(apiUrlSIGNUP,{username,password,email})
  }

  login(username:any,password:any):Observable<any>{
    return this.http.post(apiUrlLOGIN,{username,password})
  }

  setLoggedIn(value: any){
    this.isLoggedIn.next(value);
  }
}
