import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { CourcesModule } from './modules/cources/cources.module';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { LoginPagesModule } from './modules/login-pages/login-pages.module';
import { ButtonModule } from 'primeng/button';
registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CourcesModule,
    LoginPagesModule,
    ButtonModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
