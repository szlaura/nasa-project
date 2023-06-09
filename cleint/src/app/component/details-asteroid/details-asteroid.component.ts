import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Asteroid } from 'src/app/model/asteroid.model';
import { AsteroidService } from 'src/app/services/asteroid.service';
import { Emitter } from 'src/app/emitters/authEmitter';

@Component({
  selector: 'app-details-asteroid',
  templateUrl: './details-asteroid.component.html',
  styleUrls: ['./details-asteroid.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DetailsAsteroidComponent implements OnInit{

  constructor(private asteroidService: AsteroidService) {}

  ngOnInit(): void {
    this.asteroidService.currentDataDailyAsteroids.subscribe(data => {
      this.currentDailyAsteroidsId = data;
    })

    this.asteroidService.currentDataAsteroid.subscribe(data => {
     this.currentAstId = data;
    })

    this.listDailyAsteroids(this.currentDailyAsteroidsId);
  }

   /*asteroid data*/
   currentDailyAsteroidsId: any;
   currentAstId: any;

  yesterdayDateString = this.asteroidService.stringYesterday;
  asteroids!: Asteroid;

  listDailyAsteroids(id: any): void {
    this.asteroidService.getDailyAsteroidsById(id)
      .subscribe({
        next: (data) => {
          this.asteroids = data;
          Emitter.authEmitter.emit(true)
        },
        error: (e) => {
          Emitter.authEmitter.emit(false)
          console.error(e);
        }
      });
  }

}
