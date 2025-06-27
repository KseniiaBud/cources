import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-items-not-found',
  templateUrl: './items-not-found.component.html',
  styleUrl: './items-not-found.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsNotFoundComponent {

  clear() {
    
  }
}
