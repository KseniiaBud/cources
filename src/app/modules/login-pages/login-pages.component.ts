import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { userLogin } from 'src/app/store/cources/actions/user.actions';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.scss']
})
export class LoginPagesComponent {
  constructor(private store: Store) { }

  login(loginForm: NgForm) {
    this.store.dispatch(userLogin({ email: loginForm.value['email'], password: loginForm.value['password'] }));
  }
}
