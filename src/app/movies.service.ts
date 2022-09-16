import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDataJSON } from './MovieData';

@Injectable()
export class MoviesService {
  
  constructor(private http: HttpClient) {}

   getMovies(){
    return this.http.get<MovieDataJSON>("assets/movies.json");
   }
}