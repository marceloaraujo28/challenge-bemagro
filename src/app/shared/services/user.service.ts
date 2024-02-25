import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse } from '../interfaces/user-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private host: string = 'https://api.github.com';

  constructor(private _http: HttpClient) {}

  public getUserByName(userName: string): Observable<UserResponse> {
    return this._http.get<UserResponse>(`${this.host}/users/${userName}`);
  }
}
