import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAsteroidComponent } from './component/add-asteroid/add-asteroid.component';
import { ListAsteroidsComponent } from './component/list-asteroids/list-asteroids.component';
import { FormsModule } from '@angular/forms';
import { DetailsAsteroidComponent } from './component/details-asteroid/details-asteroid.component';
import { CommentAsteroidComponent } from './component/details-asteroid/comment-asteroid/comment-asteroid.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAsteroidComponent,
    ListAsteroidsComponent,
    DetailsAsteroidComponent,
    CommentAsteroidComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
