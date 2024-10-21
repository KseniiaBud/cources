import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

interface IData {
  home: MenuItem;
  model: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  private _home: MenuItem = { icon: 'pi pi-home', label: ' Курсы', routerLink: '/cources' };
  private _model: MenuItem[] = [];

  set data(value: IData) {
    this._home = { ...this._home, ...(value.home || {}) };
    this._model = [...(value.model || [])];
  }

  get home(): MenuItem {
    return this._home;
  }

  get model(): MenuItem[] {
    return this._model;
  }
}
