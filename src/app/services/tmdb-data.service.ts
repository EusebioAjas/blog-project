import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TMDB_API_URL } from "../config";
import { PopularMovies } from "../models/popular-movies";
import { MovieDetails } from "../models/movie-details";
import { MovieReviews } from "../models/movie-reviews";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TMDBDataService {

  constructor(private http:HttpClient) { }

  getPopular(){
    return this.http.get<PopularMovies>(`${TMDB_API_URL}movie/popular?api_key=${environment().tmdb_apikey}&language=en-US&page=1`).toPromise();
  }

  getDetails(id: number){
    return this.http.get<MovieDetails>(`${TMDB_API_URL}movie/${id}?api_key=${environment().tmdb_apikey}&language=en-US`).toPromise();
  }

  getReviews(id: number){
    return this.http.get<MovieReviews>(`${TMDB_API_URL}movie/${id}/reviews?api_key=${environment().tmdb_apikey}`).toPromise();
  }

}
