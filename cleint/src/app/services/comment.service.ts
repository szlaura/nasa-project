import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const apiUrl = 'http://localhost:3000/api/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
 

  getComments(asteroidid: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${apiUrl}/${asteroidid}`);
  }

  createComment(data: any): Observable<Comment> {
    return this.http.post<Comment>(apiUrl, data)
  }

  updateComment(id: any, data:any){
    return this.http.put(`${apiUrl}/${id}`, data);
  }

  deleteComment(id: string){
    return this.http.delete<Comment>(`${apiUrl}/${id}`)
  }
}
