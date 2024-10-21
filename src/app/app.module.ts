import { LOCALE_ID, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { CourcesModule } from './modules/cources/cources.module';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { LoginPagesModule } from './modules/login-pages/login-pages.module';
import { ButtonModule } from 'primeng/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { LoaderInterceptor } from './services/loader.interceptor';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CourcesEffects } from './store/cources/effects/cources-effects.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { UserEffects } from './store/cources/effects/user.effects';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    CourcesModule,
    LoginPagesModule,
    ButtonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : [],
    EffectsModule.forRoot([UserEffects, CourcesEffects ]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru'
    },
    provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
