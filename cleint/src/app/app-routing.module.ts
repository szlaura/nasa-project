import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAsteroidsComponent } from './component/list-asteroids/list-asteroids.component';
import { DetailsAsteroidComponent } from './component/details-asteroid/details-asteroid.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'asteroids', component: ListAsteroidsComponent },
  { path: 'details', component: DetailsAsteroidComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
