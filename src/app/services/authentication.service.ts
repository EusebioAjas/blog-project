import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { API_BASE_URL } from '../config/api';
import { User } from '../models/user';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient, private router: Router) {}

  registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${API_BASE_URL}/signUp`, user).pipe(
      tap((createdUser: User) => alert('Created user ' + createdUser.username)),
      catchError((err) => {
        alert('User could not be created, due to: ' + err.error.message);
        return throwError(err);
      })
    );
  }

  userLogin(user: User): Observable<string> {
    return this.httpClient.post<string>(`${API_BASE_URL}/signIn`, user).pipe(
      tap((res: string) => localStorage.setItem('access', res)),
      tap(() => alert('Login successfull'))
    );
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${API_BASE_URL}/users`).pipe(
      tap(() => console.log('user list works')),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  deleteUser(email: string): Observable<string> {
    return this.httpClient
      .delete<string>(`${API_BASE_URL}/admin/users/${email}`)
      .pipe(tap(() => console.log('User deleted')));
  }
}
