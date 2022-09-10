import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import MoviesJson from '../../assets/movies.json';
import { MovieData } from '../MovieData';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.less']
})
export class MovieComponent implements OnInit {

  movie: MovieData;

  constructor(private route: ActivatedRoute) {
    const routeParams = this.route.snapshot.paramMap;
    const movieIDFromRoute = String(routeParams.get('movieID'));

    this.movie = <MovieData>MoviesJson.movies.find(movie => movie.id == movieIDFromRoute)    
  }

  ngOnInit(): void {
  }

}
