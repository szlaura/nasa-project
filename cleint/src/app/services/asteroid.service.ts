import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asteroid } from '../model/asteroid.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { nasa_api, node_api_ast} from 'src/environments/environment'

const apnkiurl = 'http://localhost:3000/api/asteroids';

@Injectable({
  providedIn: 'root'
})
export class AsteroidService {

  private dataAsteroid = new BehaviorSubject<string>("")
  currentDataAsteroid = this.dataAsteroid.asObservable();

  private dataDailyAsteroids = new BehaviorSubject<string>("")
  currentDataDailyAsteroids = this.dataDailyAsteroids.asObservable();

  constructor(private http: HttpClient) {
    this.nasaApiURL = `${nasa_api(this.setDailyAsteroidDate())}`;
    this.nodeApiURL = `${node_api_ast}`;
    console.log("ROOTURL "+this.nasaApiURL);
    console.log("NODE  "+this.nodeApiURL);
   }

  yesterdayDate: any;
  stringYesterday!: string;
  nasaApiURL!: string;
  nodeApiURL!:string

  getAsteroids(): Observable<Asteroid> {
    return this.http.get<Asteroid>(this.nasaApiURL);
  }

  listAsteroids(): Observable<Asteroid[]>{
    console.log("SZERVER INFO" + apnkiurl)
    return this.http.get<Asteroid[]>(apnkiurl);
  }

  createAsteroid(data: Asteroid): Observable<Asteroid> {
    console.log("meg lett hivva");
    console.log(data);
    return this.http.post<Asteroid>(apnkiurl, data)
  }

  getDailyAsteroidsById(id: any): Observable<any> {
    return this.http.get<any>(`${apnkiurl}/${id}`);
  }

  setDataAsteroidId(value: any) {
    console.log("value" +value);
    this.dataAsteroid.next(value);
  }

  setDataDailyAsteroidsId(value: any){
    this.dataDailyAsteroids.next(value);
  }

  setDailyAsteroidDate(): string{
    const todayDate = new Date();
    this.yesterdayDate = new Date();
    const todaysDayOfMonth = todayDate.getDate();

    this.yesterdayDate.setDate(todaysDayOfMonth - 1);
    return this.stringYesterday = this.yesterdayDate.toISOString().split('T')[0];
  }
}