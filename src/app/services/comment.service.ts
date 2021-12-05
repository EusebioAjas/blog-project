import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { API_BASE_URL } from '../config/api';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getComments(movieId: number): Observable<Comment[]> {
    return this.httpClient
      .get<Comment[]>(`${API_BASE_URL}/movies/${movieId}/comments`);
  }

  getUserComments(): Observable<Comment[]> {
    return this.httpClient
      .get<Comment[]>(`${API_BASE_URL}/users/comments`);
  }

  destroyUserComments(commentId: number): Observable<string> {
    return this.httpClient
      .delete<string>(`${API_BASE_URL}/users/comments/${commentId}`)
      .pipe(tap((_) => alert('Deleted comment id=' + commentId)));
  }

  udpdateComment(commentId: number): Observable<string> {
    return this.httpClient
      .put<string>(`${API_BASE_URL}/users/comments/${commentId}`, commentId)
      .pipe(tap((_) => alert('Updated comment id=' + commentId)));
  }

  getComment(commentId: number): Observable<Comment> {
    return this.httpClient
      .get<Comment>(`${API_BASE_URL}/users/comments/${commentId}`);
  }
}
