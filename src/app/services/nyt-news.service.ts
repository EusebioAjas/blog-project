import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MovieNews } from '../models/movie-news';
import { NYTIMES_API_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class NytNewsService {

  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get<MovieNews>(`${NYTIMES_API_URL}articlesearch.json?fq=section_name:movies&api-key=${environment().nytimes_apikey}`).toPromise();
  }
}
