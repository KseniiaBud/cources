import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  items: MenuItem[] = [
    {
      label: 'Курсы',
      icon: 'pi pi-fw pi-home',
    }
  ];

  ngOnInit() { }
}
