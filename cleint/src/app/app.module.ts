import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAsteroidComponent } from './component/add-asteroid/add-asteroid.component';
import { ListAsteroidsComponent } from './component/list-asteroids/list-asteroids.component';
import { AddCommentComponent } from './component/add-comment/add-comment.component';
import { DeleteCommentComponent } from './component/delete-comment/delete-comment.component';
import { UpdateCommentComponent } from './component/update-comment/update-comment.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddAsteroidComponent,
    ListAsteroidsComponent,
    AddCommentComponent,
    DeleteCommentComponent,
    UpdateCommentComponent 
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
