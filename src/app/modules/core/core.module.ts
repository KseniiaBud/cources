import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonModule } from 'primeng/button';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { LoaderComponent } from './components/loader/loader.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    NotFoundComponent,
    SearchComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BreadcrumbModule,
    FormsModule,
    InputTextModule,
    ProgressSpinnerModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SearchComponent,
    LoaderComponent
  ]
})
export class CoreModule { }
