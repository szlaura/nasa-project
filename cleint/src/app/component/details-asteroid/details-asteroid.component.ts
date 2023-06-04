import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Asteroid } from 'src/app/model/asteroid.model';
import { AsteroidService } from 'src/app/services/asteroid.service';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/model/comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-asteroid',
  templateUrl: './details-asteroid.component.html',
  styleUrls: ['./details-asteroid.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class DetailsAsteroidComponent implements OnInit{

  /*asteroid data*/
  currentDailyAsteroidsId: any;
  currentAstId: any;

  constructor(private asteroidService: AsteroidService) {}

  ngOnInit(): void {
    this.asteroidService.currentDataDailyAsteroids.subscribe(data => {
      this.currentDailyAsteroidsId = data;
      console.log("currentastid DAILY"+ this.currentDailyAsteroidsId);
    })

    this.asteroidService.currentDataAsteroid.subscribe(data => {
      
     this.currentAstId = data;
     console.log("currentastid"+ this.currentAstId);
    })

    this.listDailyAsteroids(this.currentDailyAsteroidsId);
  }

  striingmertidk = this.asteroidService.stringYesterday;
  asteroids!: Asteroid;

  listDailyAsteroids(id: any): void {
    this.asteroidService.getDailyAsteroidsById(id)
      .subscribe({
        next: (data) => {
          this.asteroids = data;
         
          console.log("mai asztaroidak "+this.asteroids.element_count);
        },
        error: (e) => console.error(e)
      });
  }


  // onOpenAlert() {
  //   window.alert('The message is ' + this.dataAsteroid);
  // }


 

}
