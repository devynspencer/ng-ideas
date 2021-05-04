import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
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
}
