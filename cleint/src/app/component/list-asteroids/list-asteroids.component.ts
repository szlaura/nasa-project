import { Component } from '@angular/core';
import { Asteroid } from 'src/app/model/asteroid.model';
import { AsteroidService } from 'src/app/services/asteroid.service';

@Component({
  selector: 'app-list-asteroids',
  templateUrl: './list-asteroids.component.html',
  styleUrls: ['./list-asteroids.component.scss'],  
  //providers: [AsteroidService]
})
export class ListAsteroidsComponent {

  constructor(private asteroidService: AsteroidService) { }

  ngOnInit(): void {
    this.listDailyAsteroids();
  }

  striingmertidk =this.asteroidService.stringYesterday;
  asteroids!: Asteroid;
  Object!: Asteroid;
  public asteroidID!: string;

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

  public clickItem(item: any): string {
    //console.log("TESSST: "+item.attributes['astid'].value);
    let valamilegyen= item.attributes['astid'].value;
    let vmi = this.asteroidService.updateData(valamilegyen);
    console.log("LISTBEN "+  vmi);
    return item.attributes['astid'].value;
  }

  

  
}
