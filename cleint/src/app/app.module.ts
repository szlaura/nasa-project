import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAsteroidComponent } from './component/add-asteroid/add-asteroid.component';
import { ListAsteroidsComponent } from './component/list-asteroids/list-asteroids.component';
import { AddCommentComponent } from './component/add-comment/add-comment.component';
import { UpdateCommentComponent } from './component/update-comment/update-comment.component';
import { FormsModule } from '@angular/forms';
import { DetailsAsteroidComponent } from './component/details-asteroid/details-asteroid.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAsteroidComponent,
    ListAsteroidsComponent,
    AddCommentComponent,
    UpdateCommentComponent,
    DetailsAsteroidComponent 
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
