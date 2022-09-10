import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieData, MovieDataJSON } from '../MovieData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  movies: MovieData[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let req = this.http.get<MovieDataJSON>("assets/movies.json");
    req.subscribe(data => {
      this.movies = data.movies;
    });

    //https://angular.io/guide/http
  }

}
