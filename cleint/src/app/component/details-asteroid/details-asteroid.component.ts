import { Component } from '@angular/core';
import { Asteroid } from 'src/app/model/asteroid.model';
import { AsteroidService } from 'src/app/services/asteroid.service';
import { ListAsteroidsComponent } from '../list-asteroids/list-asteroids.component';

@Component({
  selector: 'app-details-asteroid',
  templateUrl: './details-asteroid.component.html',
  styleUrls: ['./details-asteroid.component.scss'],
  providers: [AsteroidService]
})
export class DetailsAsteroidComponent {

  dataAsteroid: any;

  constructor(private asteroidService: AsteroidService ) {
    // setTimeout(()=>{  this.asteroidService.dataSource.subscribe((data: any) => {
    //   this.dataAsteroid = data;
    // });}, 3000);});

    setTimeout(()=>{       
      this.asteroidService.dataSource.subscribe((data: any) => {
        this.dataAsteroid = data;
      });
    }, 3000);
   
    console.log("HATHA "+this.dataAsteroid);

  }

  ngOnInit(): void {
    // this.listDailyAsteroids();
    // console.log("miafene ertek"+this.miafene);
    //this.asteroidID = this.asteroidService.idAmitAtkellvinni;
   
  }

  striingmertidk = this.asteroidService.stringYesterday;
  asteroids!: Asteroid;
  Object!: Asteroid;
  asteroidID?: string;
  miafene!: string;
  ertek!: string;


  listDailyAsteroids(): void {
    this.asteroidService.listAsteroids()
      .subscribe({
        next: (data) => {
          this.asteroids = data.pop()!;
          const keys = Object.keys(this.asteroids.near_earth_objects);
          //this.res.element_count = this.asteroids?.element_count;
          console.log(this.asteroids);
          console.log(keys)
        },
        error: (e) => console.error(e)
      });
  }


  onOpenAlert() {
    window.alert('The message is ' + this.dataAsteroid);
  }


}
