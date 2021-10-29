import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchVideo } from '../models';
import { environment } from 'src/environments/environment';
import { YOUTUBE_API_URL } from '../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YouTubeVideoService {
  url = `${YOUTUBE_API_URL}&key=${environment().youtube_apikey}&type=video&maxResults=1&q=`;

  constructor(private http: HttpClient) {}

  searchYouTubeVideo(query: string): Observable<SearchVideo> {
    return this.http.get<SearchVideo>(this.url + query);
  }
}
