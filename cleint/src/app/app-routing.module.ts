import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAsteroidComponent } from './component/add-asteroid/add-asteroid.component';
import { ListAsteroidsComponent } from './component/list-asteroids/list-asteroids.component';
import { DetailsAsteroidComponent } from './component/details-asteroid/details-asteroid.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: AddAsteroidComponent },
  { path: 'asteroids', component: ListAsteroidsComponent },
  //{ path: 'asteroids/:id', component: A },
  { path: 'details', component: DetailsAsteroidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
