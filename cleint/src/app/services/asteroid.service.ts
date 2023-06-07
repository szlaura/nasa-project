import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asteroid } from '../model/asteroid.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { nasa_api} from 'src/environments/environment'

const apiUrl = 'http://localhost:3000/api/asteroids';

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

   }

  yesterdayDate: any;
  stringYesterday!: string;
  nasaApiURL!: string;

  getAsteroids(): Observable<Asteroid> {
    return this.http.get<Asteroid>(this.nasaApiURL);
  }

  listAsteroids(): Observable<Asteroid[]>{
    console.log("SZERVER INFO" + apiUrl)
    return this.http.get<Asteroid[]>(apiUrl);
  }

  createAsteroid(data: Asteroid): Observable<Asteroid> {
    console.log("meg lett hivva");
    console.log(data);
    return this.http.post<Asteroid>(apiUrl, data)
  }

  getDailyAsteroidsById(id: any): Observable<any> {
    return this.http.get<any>(`${apiUrl}/${id}`);
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