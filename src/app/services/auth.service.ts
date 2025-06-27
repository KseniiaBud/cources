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
    localStorage.clear();
  }

  public isAuthenticated(): boolean {
    if (localStorage.getItem("login")) {
      return true;
    } else {
      return false;
    }
  }

  public getUserInfo(): string|null {
    return localStorage.getItem("login");
  }
}
