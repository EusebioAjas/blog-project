import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TMDB_API_URL } from "../config";
import { MovieReviews } from "../models/movie-reviews";
import { environment } from "src/environments/environment";
import { MovieResponse } from '../models/movies-response';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TMDBDataService {
  moviesUrl = `${TMDB_API_URL}movie/popular?api_key=${environment().tmdb_apikey}&language=en-US&page=1`;

  constructor(private http:HttpClient) { }

  getPopular(){
    return this.http.get<MovieResponse>(this.moviesUrl).toPromise();
  }

  getTopRated(pageNumber: number): Observable<MovieResponse>{
    return this.http.get<MovieResponse>(`${TMDB_API_URL}movie/top_rated?api_key=${environment().tmdb_apikey}&language=en-US&page=${pageNumber}`);
  }

  getUpcoming(pageNumber: number): Observable<MovieResponse>{
    return this.http.get<MovieResponse>(`${TMDB_API_URL}movie/upcoming?api_key=${environment().tmdb_apikey}&language=en-US&page=${pageNumber}`);
  }

  getMovie(id: number){
    return this.http.get<Movie>(`${TMDB_API_URL}movie/${id}?api_key=${environment().tmdb_apikey}&language=en-US`).toPromise();
  }

  getReviews(id: number){
    return this.http.get<MovieReviews>(`${TMDB_API_URL}movie/${id}/reviews?api_key=${environment().tmdb_apikey}`).toPromise();
  }

  searchMovie(topic: string, pageNumber: number) {
    return this.http.get<MovieResponse>(`${TMDB_API_URL}search/movie?api_key=${environment().tmdb_apikey}&language=en-US&page=${pageNumber}&include_adult=false&query=${topic}`).toPromise()
  }
}
