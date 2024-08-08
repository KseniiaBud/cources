import { ConfirmationService } from 'primeng/api';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ICource } from 'src/app/models/cources';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CourcesService } from 'src/app/services/cources.service';
import { Router } from '@angular/router';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';
@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss'],
  providers: [FilterPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceListComponent implements OnInit {
  public cources: ICource[] = [];
  public search: string = '';
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
  public totalCount = 0;
  public nextPage = 0;

  constructor(
    private filterPipe: FilterPipe,
    private readonly courcesService: CourcesService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private breadcrumbsService: BreadcrumbsService,
  ) { }

  clickSearch(): void {
    console.log("Поиск по введенному значению: " + this.search);
    this.getCources({ serch: true })
  }

  ngOnInit(): void {
    this.breadcrumbsService.data = {
      home: this.breadcrumbsService.home,
      model: [],
    }

    this.getCources();
  }

  public getCources({ loadMore = false, serch = false } = {}) {
    if (loadMore) {
      this.page++;
    }

    if (serch) {
      this.cources = [];
      this.page = 1
    }
    const params = {
      _page: this.page,
      _per_page: this.size,
      _sort: 'creationDate',
      title: this.search,
      // q: this.search,
    };

    this.courcesService.getCources(params).subscribe((response) => {
      debugger
      this.cources = this.cources.concat(response.data as ICource[]);
      this.totalCount = response.pages;
      this.nextPage = response.next;
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


