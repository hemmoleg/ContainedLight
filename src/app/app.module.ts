import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './movies.service';
import { MovieSelectionComponent } from './movie-selection/movie-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HomeComponent,
    MovieSelectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'movies', component: MovieSelectionComponent},
      {path: 'movies/:movieID', component: MovieComponent}
    ], {useHash: true}),
    HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
