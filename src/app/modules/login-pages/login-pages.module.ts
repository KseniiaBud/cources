import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPagesComponent } from './login-pages.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [LoginPagesComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    CardModule,
  ], 
  exports: [LoginPagesComponent]
})
export class LoginPagesModule { }
