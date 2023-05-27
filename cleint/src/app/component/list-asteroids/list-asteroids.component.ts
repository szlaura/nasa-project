import { Component } from '@angular/core';
import { Asteroid } from 'src/app/model/asteroid.model';
import { AsteroidService } from 'src/app/services/asteroid.service';

@Component({
  selector: 'app-list-asteroids',
  templateUrl: './list-asteroids.component.html',
  styleUrls: ['./list-asteroids.component.scss']
})
export class ListAsteroidsComponent {

  constructor(private asteroidService: AsteroidService) { }

  ngOnInit(): void {
    this.listDailyAsteroids();
  }

  asteroids!: Asteroid;


  listDailyAsteroids(): void {
    this.asteroidService.listAsteroids()
      .subscribe({
        next: (data) => {
          this.asteroids= data.pop()!;
          const keys = Object.keys(this.asteroids.near_earth_objects);
          //this.res.element_count = this.asteroids?.element_count;
          console.log(this.asteroids);
          console.log(keys)
  
        
        },
        error: (e) => console.error(e)
      });
  }

  
}
