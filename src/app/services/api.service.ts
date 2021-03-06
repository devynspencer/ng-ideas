import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Comment, Idea, User } from '@app/models';
import { AuthService } from '@app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private api = `${environment.api_server_url}/api`;

  constructor(private http: HttpClient, private auth: AuthService) {}

  private request(
    method: string,
    endpoint: string,
    body?: any
  ): Observable<any> {
    const url = `${this.api}/${endpoint}`;
    return this.http.request(method, url, {
      body,
      headers: { authorization: `Bearer: ${this.auth.token}` },
    });
  }

  getUsers(page?: string): Observable<User[]> {
    const endpoint = page ? `users?page=${page}` : 'users';

    return this.request('GET', endpoint);
  }

  getUser(username: string): Observable<User> {
    return this.request('GET', `users/${username}`);
  }

  getIdeas(page?: string): Observable<Idea[]> {
    const endpoint = page ? `ideas?page=${page}` : 'ideas';

    return this.request('GET', endpoint);
  }

  getLatestIdeas(page?: string): Observable<Idea[]> {
    const endpoint = page ? `ideas/latest?page=${page}` : 'ideas/latest';

    return this.request('GET', endpoint);
  }

  getIdea(id: string): Observable<Idea> {
    return this.request('GET', `ideas/${id}`);
  }

  createIdea(data): Observable<Idea> {
    return this.request('POST', 'ideas', data);
  }

  updateIdea(id: string, data): Observable<Idea> {
    return this.request('PUT', `ideas/${id}`, data);
  }

  deleteIdea(id: string): Observable<Idea> {
    return this.request('DELETE', `ideas/${id}`);
  }

  upvoteIdea(id: string): Observable<Idea> {
    return this.request('POST', `ideas/${id}/upvote`);
  }

  downvoteIdea(id: string): Observable<Idea> {
    return this.request('POST', `ideas/${id}/downvote`);
  }

  bookmarkIdea(id: string): Observable<User> {
    return this.request('POST', `ideas/${id}/bookmark`);
  }

  unbookmarkIdea(id: string): Observable<User> {
    return this.request('DELETE', `ideas/${id}/bookmark`);
  }

  getCommentsByIdea(ideaId: string, page?: string): Observable<Comment[]> {
    const endpoint = page
      ? `comments/idea/${ideaId}?page=${page}`
      : `comments/idea/${ideaId}`;

    return this.request('GET', endpoint);
  }

  getCommentsByUser(userId: string, page?: string): Observable<Comment[]> {
    const endpoint = page
      ? `comments/user/${userId}?page=${page}`
      : `comments/user/${userId}`;

    return this.request('GET', endpoint);
  }

  getComment(id: string): Observable<Comment> {
    return this.request('GET', `comments/${id}`);
  }

  createComment(ideaId: string, data): Observable<Comment> {
    return this.request('POST', `comments/idea/${ideaId}`, data);
  }

  deleteComment(id: string): Observable<Comment> {
    return this.request('DELETE', `comments/${id}`);
  }
}
