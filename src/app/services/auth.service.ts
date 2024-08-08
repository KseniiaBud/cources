import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/userAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public login(login: string, password:string) {
    return this.httpClient.get<IUser[]>(`/users?email=${login}&password=${password}`);
  }

  public logout(): void {
    localStorage.removeItem('auth_token');
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem("auth_token");
  }

  public getUserInfo() {
    return this.httpClient.get<IUser[]>(`/users?token=${localStorage.getItem('auth_token')}`);
  }
}
