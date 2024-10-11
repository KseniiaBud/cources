import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.scss']
})
export class LoginPagesComponent {
  subscriptions: any;
  constructor(private router: Router, private authService: AuthService) { }
  @Output() userLoginInfo = new EventEmitter();
  login(loginForm: NgForm): void {
    this.authService.login(loginForm.value['email'], loginForm.value['password']).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          localStorage.setItem('auth_token', data[0].fakeToken);
          this.router.navigate(['/cources']);
        } else {
          console.log("Ошибка входа");
        }
      }
    })
  }
}
