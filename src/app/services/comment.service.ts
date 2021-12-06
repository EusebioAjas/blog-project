import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_BASE_URL } from '../config/api';
import { Comment } from '../models/comment';
import { CommentRequest } from '../models/comment-request';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getComments(movieId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(
      `${API_BASE_URL}/movies/${movieId}/comments`
    );
  }

  getUserComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${API_BASE_URL}/users/comments`);
  }

  destroyUserComments(commentId: number): Observable<string> {
    return this.httpClient
      .delete<string>(`${API_BASE_URL}/users/comments/${commentId}`)
      .pipe(tap((_) => console.log('Deleted comment id=' + commentId)));
  }

  udpdateComment(commentId: number, content: string): Observable<string> {
    console.log(content);
    return this.httpClient
      .put<string>(`${API_BASE_URL}/users/comments/${commentId}`, {
        content: content,
      })
      .pipe(tap((_) => console.log('Updated comment id=' + commentId)));
  }

  getComment(commentId: number): Observable<Comment> {
    return this.httpClient.get<Comment>(
      `${API_BASE_URL}/users/comments/${commentId}`
    );
  }

  createComment({
    movieId,
    title,
    content,
  }: CommentRequest): Observable<Comment> {
    return this.httpClient
      .post<Comment>(`${API_BASE_URL}/users/comments`, {
        movieId,
        title,
        content,
      })
      .pipe(tap(() => console.log('comment created')));
  }
}
