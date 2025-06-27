import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService
  ) { }

  title: string = 'cources';
  isAuthenticated: boolean = false;
  login: string = ""

  userLoginInfo(params: any) {
    this.authService.login(params.email, params.password);
    this.login = params.email;
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log("Выполнен вход в систему!");
  }

}
