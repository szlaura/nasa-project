import { Component } from '@angular/core';
import { Asteroid } from 'src/app/model/asteroid.model';
import { AsteroidService } from 'src/app/services/asteroid.service';


@Component({
  selector: 'app-add-asteroid',
  templateUrl: './add-asteroid.component.html',
  styleUrls: ['./add-asteroid.component.scss']
})
export class AddAsteroidComponent{

  constructor(private asteroidService: AsteroidService) { }

  ngOnInit(): void {
   this.getAsterosids();
  }

  dataAst!: Asteroid;

  getAsterosids(): void {
    this.asteroidService.getAsteroids()
      .subscribe(
        data => {
          this.dataAst = data;
          //this.element_count = data.element_count
          console.log("element: "+this.dataAst.element_count)
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveAsteroids(): void {
    this.asteroidService.createAsteroid(this.dataAst)
      .subscribe({
        next: (res) => {
          console.log(res);
          //this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

}
