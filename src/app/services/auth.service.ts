import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { AuthDto, AuthType, User } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = `${environment.api_server_url}/auth`;

  constructor(private http: HttpClient) {}

  login(data: AuthDto): Observable<User> {
    return this.auth('login', data);
  }

  register(data: AuthDto): Observable<User> {
    return this.auth('register', data);
  }

  whoami(): Observable<User> {
    return this.http.get<User>(`${this.api}/whoami`, {
      headers: { authorization: `Bearer ${this.token}` },
    });
  }

  get token(): string {
    return localStorage.getItem('idea_token');
  }

  set token(val: string) {
    val ? localStorage.setItem('idea_token', val) : localStorage.clear();
  }

  private auth(authType: AuthType, data: AuthDto): Observable<User> {
    return this.http.post<User>(`${this.api}/${authType}`, data).pipe(
      mergeMap((user: User) => {
        this.token = user.token;
        return of(user);
      })
    );
  }
}
