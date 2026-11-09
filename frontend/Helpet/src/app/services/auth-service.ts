import { inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Service()
export class AuthService {
  private readonly API_BASE_URL = 'http://localhost:8080/api/auth';
  private readonly SIGNIN_URL = 'sign-in';
  private readonly REGISTER_URL = 'register';

  isSignedIn: boolean = false;

  http = inject(HttpClient);

  signIn(data: any): Observable<any> {
    return this.http.post(`${this.API_BASE_URL}/${this.SIGNIN_URL}`, data, {withCredentials: true}).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        this.isSignedIn = true;


        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
      }),
    );
  }

  register(data: any): Observable<any> {
    return this.http
      .post(`${this.API_BASE_URL}/${this.REGISTER_URL}`, data, {withCredentials: true})
      .pipe(tap((response: any) => {
        this.isSignedIn = true;

        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
      }));
  }
}

