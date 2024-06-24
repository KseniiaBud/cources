import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.scss']
})
export class LoginPagesComponent {
  constructor(private router: Router, private authService: AuthService) {}
  @Output() userLoginInfo = new EventEmitter();
  public email: string = "";
  public password: string = "";
  login(): void {
    this.authService.login(this.email, this.password);
    this.router.navigate(['/cources']);
  }
}
