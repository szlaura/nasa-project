import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Asteroid } from '../model/asteroid.model';
import { Observable, of } from 'rxjs';

const apiurl = 'http://localhost:3000/api/asteroids';

@Injectable({
  providedIn: 'root'
})
export class AsteroidService {

  constructor(private http: HttpClient) { }

  rootURL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-05-24&end_date=2023-05-24&api_key=8x7SnxROCmJKcbOAt2XiQSWYnGaiQ8aLmYfawmT4';
 
  task: any;

  getAsteroids(): Observable<Asteroid> {
    return this.http.get<Asteroid>(this.rootURL);
  }

  createAsteroid(data: Asteroid): Observable<Asteroid> {
    console.log("meg lett hivva");
    console.log(data);
    return this.http.post<Asteroid>(apiurl, data)
  }

  /*addTask(task: any) {
    return this.http.post(this.rootURL + '/task', {task});
  }

  editTask(task: any) {
    return this.http.put(this.rootURL + '/task', {task});
  }

  deleteTask(taskId: any) {
    console.log('deleting task:::', taskId);
    return this.http.delete(`${this.rootURL}/task/${taskId}`);
  }*/

}