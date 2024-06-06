import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourceListComponent } from './components/cource-list/cource-list.component';
import { CourceAddComponent } from './components/cource-add/cource-add.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { AutorsComponent } from '../../shared/components/autors/autors.component';

@NgModule({
  declarations: [
    CourceListComponent,
    CourceAddComponent,
    CourseItemComponent,
    DurationPipe,
    CoueceBoundaryDirective,
    FilterPipe,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    FormsModule,
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    CalendarModule,
    AutorsComponent,
  ],
  providers: [ConfirmationService],
  exports: [
    CourceListComponent, 
    CourceAddComponent,
  ]
})
export class CourcesModule { }
