import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../config/api';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getComments(movieId: number) {
    return this.httpClient
      .get<Comment[]>(`${API_BASE_URL}/movies/${movieId}/comments`)
      .toPromise();
  }
}
