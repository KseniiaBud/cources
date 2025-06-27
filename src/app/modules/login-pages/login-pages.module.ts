import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPagesComponent } from './login-pages.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginPagesComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
  ], 
  exports: [LoginPagesComponent]
})
export class LoginPagesModule { }
