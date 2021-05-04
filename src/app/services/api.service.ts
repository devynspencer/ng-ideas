import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { User } from '@app/models/user.model';
import { AuthService } from '@app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api = `${environment.api_server_url}/api`;

  constructor(private http: HttpClient, private auth: AuthService) { }

  private request(method: string, endpoint: string, body?: any): Observable<any> {
    const url = `${this.api}/${endpoint}`;
    return this.http.request(method, url, { body, headers: { authorization: `Bearer: ${this.auth.token}` } });
  }

  getUsers(page?: string): Observable<User[]> {
    const endpoint = page ? `users?page=${page}` : 'users';

    return this.request('GET', endpoint);
  }

  getUser(username: string): Observable<User> {
    return this.request('GET', `users/${username}`);
  }
}
