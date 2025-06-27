import { ConfirmationService } from 'primeng/api';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ICource } from 'src/app/models/cources';
import { FilterPipe } from '../../pipes/filter.pipe';
import { Router } from '@angular/router';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCources, selectTotalCount } from 'src/app/store/cources/selectors/cources-selectors.selectors';
import { deleteCource, getCources } from 'src/app/store/cources/actions/cources-actions.actions';
@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss'],
  providers: [FilterPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceListComponent implements OnInit {
  public cources$ = this.store.select(selectCources);
  public addCource: boolean = false;

  public page = 1;
  public size = 5;
  public totalCount$ = this.store.select(selectTotalCount);
  public loading$ = new BehaviorSubject<boolean>(false);
  public nextPage = 0;

  constructor(
    private readonly confirmationService: ConfirmationService,
    private readonly router: Router,
    private readonly breadcrumbsService: BreadcrumbsService,
    private readonly store: Store,
  ) { }

  onSearch(search: string): void {
    console.log("Поиск по введенному значению: " + search);
    this.store.dispatch(getCources({ params: { ...this.searchParams, title: search } }));
  }
  public searchParams = {
    _page: this.page,
    _per_page: this.size,
    _sort: 'creationDate'
  };

  ngOnInit(): void {
    this.breadcrumbsService.data = {
      home: this.breadcrumbsService.home,
      model: [],
    }
    this.store.dispatch(getCources({ params: this.searchParams }));
  }

  public addCourcesItem(): void {
    this.router.navigate(['cources/new']);
  }
  public editCourcesItem(cource: ICource): void {
    this.router.navigate(['cources', cource.id]);
    console.log(cource);
  }

  public delete(cource: ICource): void {
     this.confirmationService.confirm({
      acceptLabel: "Удалить",
      rejectLabel: "Отмена",
      header: 'Удалить курс?',
      message: 'Вы действительно хотите удалить данный курс "'+ cource.title +'" ? ',
      acceptButtonStyleClass: 'p-button-sm p-button-danger',
      rejectButtonStyleClass: 'p-button-sm p-button-secondary p-button-outlined',
      accept: () => {
        this.store.dispatch(deleteCource({ id: cource.id }));
        this.confirmationService.close();
        this.store.dispatch(getCources({ params: this.searchParams }));
      },
      reject: () => {
        this.confirmationService.close();
      },
      key: "cd"
    });
  }

  public loadMore(): void {
    this.searchParams = { ...this.searchParams, _per_page: Number(this.searchParams['_per_page']) + 5 };
    this.store.dispatch(getCources({ params: this.searchParams }));
  }
}
