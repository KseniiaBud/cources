import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourceListComponent } from './components/cource-list/cource-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CourseItemComponent } from './components/course-item/course-item.component';

@NgModule({
  declarations: [
    CourceListComponent,
    CourseItemComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
  ],
  exports: [CourceListComponent]
})
export class CourcesModule { }
