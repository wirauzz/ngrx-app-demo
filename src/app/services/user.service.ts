import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'https://random-data-api.com/api/users/random_user';
  word = '?size=5';

  constructor(private http: HttpClient) { }

  public getUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}${this.word}`);
  }

  public postUser(newUser: User) : Observable<User> {
    return this.http.post<User>(`${this.userUrl}${this.word}`, newUser);
  }

  public removeUser() : Observable<User> {
    return this.http.delete<User>(`${this.userUrl}${this.word}`);
  }

  public putUser(newUser: User) : Observable<User> {
    return this.http.put<User>(`${this.userUrl}${this.word}`, newUser);
  }
}
