import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchVideo } from '../models';
import { environment } from 'src/environments/environment';
import { YOUTUBE_API_URL } from '../config';
import { DEFAULT_TERM } from '../config/youtube';

@Injectable({
  providedIn: 'root',
})
export class YouTubeVideoService {
  url = `${YOUTUBE_API_URL}&key=${environment().youtube_apikey}&type=video&maxResults=1&q=`;

  constructor(private http: HttpClient) {}

  searchYouTubeVideo(query: string){
    const fullTerm = query + DEFAULT_TERM;
    return this.http.get<SearchVideo>(this.url + fullTerm).toPromise();
  }
}
