import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Component } from '@angular/core';

@Component({
  selector: 'app-autors',
  standalone: true,
  templateUrl: './autors.component.html',
  styleUrls: ['./autors.component.scss'],
  imports: [ AutoCompleteModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class AutorsComponent {

}
