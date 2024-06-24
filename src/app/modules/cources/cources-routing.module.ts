import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourceListComponent } from './components/cource-list/cource-list.component';
import { CourceAddComponent } from './components/cource-add/cource-add.component';
import { canActivate } from 'src/app/services/auth.guard';
import { CourcesComponent } from './cources.component';

const router: Routes = [
  {
    path: '',
    component: CourcesComponent,
    canActivate: [canActivate],
    children: [
      { path: '', component: CourceListComponent },
      { path: 'new', component: CourceAddComponent },
      { path: ':courceId', component: CourceAddComponent },
    ],
  },

]

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class CourcesRoutingModule { }
