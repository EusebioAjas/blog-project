import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchVideo } from '../models';
import { environment } from 'src/environments/environment';
import { YOUTUBE_API_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class YouTubeVideoService {
  url = `${YOUTUBE_API_URL}&key=${environment().youtube_apikey}&type=video&q=`;

  constructor(private http: HttpClient) {
  }

  getYouTubeVideos(query: string) {
    return this.http.get<SearchVideo>(this.url + query).toPromise();
  }
}
