import { Component, OnInit } from '@angular/core';
import { Asteroid } from 'src/app/model/asteroid.model';
import { AsteroidService } from 'src/app/services/asteroid.service';

@Component({
  selector: 'app-list-asteroids',
  templateUrl: './list-asteroids.component.html',
  styleUrls: ['./list-asteroids.component.scss'],  
})
export class ListAsteroidsComponent implements OnInit{

  constructor(private asteroidService: AsteroidService) { }

  ngOnInit(): void {
    this.listDailyAsteroids();
  }

  yesterdayDateString =this.asteroidService.stringYesterday;
  asteroids!: Asteroid;
  dataAsteroid: any;
  dataDailyAsteroids: any;

  listDailyAsteroids(): void {
    this.asteroidService.listAsteroids()
      .subscribe({
        next: (data) => {
          this.asteroids= data.pop()!;
          const keys = Object.keys(this.asteroids.near_earth_objects);
          this.dataDailyAsteroids = this.asteroids._id;
          this.asteroidService.setDataDailyAsteroidsId(this.dataDailyAsteroids);
        },
        error: (e) => console.error(e)
      });
  }

  public clickItem(item: any) {
    this.dataAsteroid=item.attributes['astid'].value;
    this.asteroidService.setDataAsteroidId(this.dataAsteroid);
  }

  

  
}
