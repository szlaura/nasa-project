import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const apnkiurlLOGIN = 'http://localhost:3000/api/auth/login';
const apnkiurlSIGNUP = 'http://localhost:3000/api/auth/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginUser(data: any){
    return this.http.post<any>(apnkiurlLOGIN, data, {observe: 'response'})
  }

  signupUser(data: any){
    return this.http.post<any>(apnkiurlSIGNUP, data, {observe: 'response'})
  }
}
