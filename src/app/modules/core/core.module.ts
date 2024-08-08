import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonModule } from 'primeng/button';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BreadcrumbModule,
  ],
  exports: [
    // BreadcrumbsComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
  ]
})
export class CoreModule { }
