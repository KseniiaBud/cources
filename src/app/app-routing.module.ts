import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
import { LoginPagesComponent } from './modules/login-pages/login-pages.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cources' },
  {
    path: 'cources',
    loadChildren: () => import('./modules/cources/cources.module').then((m) => m.CourcesModule),
  },
  { path: 'login', component: LoginPagesComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
