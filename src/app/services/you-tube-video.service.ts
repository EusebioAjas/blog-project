import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchVideo } from '../models';
import { YTB_API_KEY, YTB_API_URL } from '../shared/apis';

const BASE_URL = `${YTB_API_URL}&key=${YTB_API_KEY}&type=video&q=`;

@Injectable({
  providedIn: 'root'
})
export class YouTubeVideoService {

  constructor(private http: HttpClient) {
  }

  getYouTubeVideos(query: string) {
    return this.http.get<SearchVideo>(BASE_URL + query).toPromise();
  }
}
