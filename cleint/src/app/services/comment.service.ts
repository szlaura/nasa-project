import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { node_api_com } from 'src/environments/environment';


const apnkiurl = 'http://localhost:3000/api/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { 
    this.nodeApiUrl = `${node_api_com}`;
  }
  nodeApiUrl!: any;

  getComments(asteroidid: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${apnkiurl}/${asteroidid}`);
  }

  createComment(data: any): Observable<Comment> {
    console.log("meg lett hivva");
    console.log(data);
    return this.http.post<Comment>(apnkiurl, data)
  }

  updateComment(id: any, data:any){
    return this.http.put(`${apnkiurl}/${id}`, data);
  }

  deleteComment(id: string){
    return this.http.delete<Comment>(`${apnkiurl}/${id}`)
  }
}
