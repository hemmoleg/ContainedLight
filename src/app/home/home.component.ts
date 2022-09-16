import { Component, OnInit } from '@angular/core';
import { MovieData } from '../MovieData';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  movies: MovieData[] = [];

  constructor(private moviesService: MoviesService) { 
    this.moviesService.getMovies().subscribe(data => {
      this.movies = data.movies;
    })
  }

  ngOnInit(): void {
    
  }

}
