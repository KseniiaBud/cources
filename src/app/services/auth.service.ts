import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  public login(login: string, password:string): void {
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);
  }

  public logout(): void {
    localStorage.removeItem("login");
    localStorage.removeItem("password");
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem("login");
  }

  public getUserInfo(): string {
    return localStorage.getItem('login') || '';
  }
}
