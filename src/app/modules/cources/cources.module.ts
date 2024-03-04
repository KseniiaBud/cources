import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourceListComponent } from './components/cource-list/cource-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CourseItemComponent } from './components/course-item/course-item.component';
import { DurationPipe } from './pipes/duration.pipe';
import { CoueceBoundaryDirective } from './directives/couece-boundary.directive';
import { CardModule } from 'primeng/card';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CourceListComponent,
    CourseItemComponent,
    DurationPipe,
    CoueceBoundaryDirective,
    FilterPipe,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,

  ],
  providers: [ConfirmationService],
  exports: [CourceListComponent]
})
export class CourcesModule { }
