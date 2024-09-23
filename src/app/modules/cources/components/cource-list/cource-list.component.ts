import { ConfirmationService } from 'primeng/api';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ICource } from 'src/app/models/cources';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CourcesService } from 'src/app/services/cources.service';
import { Router } from '@angular/router';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, of, Subject, switchMap, tap, timeInterval, timeout, timer } from 'rxjs';
@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss'],
  providers: [FilterPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceListComponent implements OnInit {
  public cources$ = new Subject<ICource[]>();
  public addCource: boolean = false;
  public selectedCource: ICource = {
    id: 0,
    title: '',
    topRated: false,
    creationDate: new Date,
    duration: 0,
    description: ''
  };

  public page = 1;
  public size = 5;
  public totalCount$ = new BehaviorSubject<number>(0);
  public loading$ = new BehaviorSubject<boolean>(false);
  public nextPage = 0;

  constructor(
    private readonly courcesService: CourcesService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private breadcrumbsService: BreadcrumbsService,
    private changeDetector: ChangeDetectorRef
  ) { }

  onSearch(search: string): void {
    console.log("Поиск по введенному значению: " + search);
    of(search).pipe(
      debounceTime(250),
      filter((value) => !!value && value.length >= 3),
      distinctUntilChanged(),
      switchMap((value: any) => this.courcesService.getCourcesByTitle(value).pipe(
        tap((cources) => {
          this.cources$.next(cources.data as ICource[])
          this.totalCount$.next(cources.pages);
          this.nextPage = cources.next;
          this.changeDetector.detectChanges();
        })
      ))
    ).subscribe();
  }

  ngOnInit(): void {
    this.breadcrumbsService.data = {
      home: this.breadcrumbsService.home,
      model: [],
    }
    this.getCources();
  }

  public getCources({ loadMore = false } = {}) {
    this.loading$.next(true);
    if (loadMore) {
      this.page++;
    }
    
    const params = {
      _page: this.page,
      _per_page: this.size,
      _sort: 'creationDate'
    };

    this.courcesService.getCources(params).subscribe((response) => {
      debugger; // оставила дебаггер для тестирования лоадера, очень быстро прогружается и лоадер не видно
      this.cources$.next(response.data as ICource[]);
      this.totalCount$.next(response.pages);
      this.nextPage = response.next;
      this.changeDetector.detectChanges();
      this.loading$.next(false);
    });
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
      header: 'Подтверждение действия',
      message: 'Вы действительно хотите удалить данный курс?',
      accept: () => {
        this.courcesService.deleteCource(cource.id).subscribe(() => {
          this.getCources();
        });
      },
      reject: () => {
        this.confirmationService.close();
      },
      key: "cd"
    });
  }

  public loadMore(): void {
    this.getCources({ loadMore: true });
  }
}


