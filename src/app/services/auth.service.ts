import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/userAuth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public login(login: string, password:string): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`/users?email=${login}&password=${password}`);
  }

  public logout() {
    localStorage.removeItem('auth_token');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem("auth_token");
  }

  public getUserInfo(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(`/users?token=${localStorage.getItem('auth_token')}`);
  }
}
