import { Component, OnInit } from '@angular/core';
import { AsteroidService } from './services/asteroid.service';
import { Asteroid } from './model/asteroid.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  dataAst!: Asteroid;
  element_count!: number;
  
  constructor() { }

  ngOnInit(){
  
  }
}
