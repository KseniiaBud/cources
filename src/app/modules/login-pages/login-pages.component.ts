import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.scss']
})
export class LoginPagesComponent {
  @Output() userLoginInfo = new EventEmitter();

  public email: string = "";
  public password: string = "";
  login(): void {
    let map = {
      email: this.email,
      password: this.password
    }
    this.userLoginInfo.emit(map);
  }
}
