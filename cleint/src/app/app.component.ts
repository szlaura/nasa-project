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
  
  constructor(private asteroidService: AsteroidService) { }

  ngOnInit(){
  
  }

//   asteroidPeldany: Asteroid = {
//     links: {
//       next : "string",
//       previous: "string",
//       self: "string"
//   },
//   element_count: 53,
//   near_earth_objects: {
//       date: 
//           {
//               links: {
//                   self: "string"
//               },
//               id: "string",
//               neo_reference_id: "string",
//               name: "string",
//               nasa_jpl_url: "string",
//               absolute_magnitude_h: 33,
//               estimated_diameter: {
//                   kilometers: {
//                       estimated_diameter_min: 444,
//                       estimated_diameter_max: 456
//                   },
//                   meters: {
//                       estimated_diameter_min: 12,
//                       estimated_diameter_max: 234
//                   },
//                   miles: {
//                       estimated_diameter_min: 33,
//                       estimated_diameter_max: 123
//                   },
//                   feet: {
//                       estimated_diameter_min: 22,
//                       estimated_diameter_max: 123
//                   }
//               },
//               is_potentially_hazardous_asteroid: true,
//               close_approach_data: [
//                   {
//                       close_approach_date: "string",
//                       close_approach_date_full: "string",
//                       epoch_date_close_approach: 44,
//                       relative_velocity: {
//                           kilometers_per_second: "string",
//                           kilometers_per_hour: "string",
//                           miles_per_hour: "string"
//                       },
//                       miss_distance: {
//                           astronomical: "string",
//                           lunar: "string",
//                           kilometers: "string",
//                           miles: "string"
//                       },
//                       orbiting_body: "string"
//                   }
//               ],
//               is_sentry_object: true
//           }
//       }
//   };

}
