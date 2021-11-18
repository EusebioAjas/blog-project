import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TMDB_API_URL } from "../config";
import { MovieReviews } from "../models/movie-reviews";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { PopularMovies } from '../models/popular-movies';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class TMDBDataService {
  moviesUrl = `${TMDB_API_URL}movie/popular?api_key=${environment().tmdb_apikey}&language=en-US&page=1`;

  constructor(private http:HttpClient) { }

  getPopular(){
    return this.http.get<PopularMovies>(this.moviesUrl).toPromise();
  }

  getMovie(id: number){
    return this.http.get<Movie>(`${TMDB_API_URL}movie/${id}?api_key=${environment().tmdb_apikey}&language=en-US`).toPromise();
  }

  getReviews(id: number){
    return this.http.get<MovieReviews>(`${TMDB_API_URL}movie/${id}/reviews?api_key=${environment().tmdb_apikey}`).toPromise();
  }
}
