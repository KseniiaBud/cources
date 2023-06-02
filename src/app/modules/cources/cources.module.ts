import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourceListComponent } from './components/cource-list/cource-list.component';



@NgModule({
  declarations: [
    CourceListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CourceListComponent]
})
export class CourcesModule { }
