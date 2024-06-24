import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ICource } from 'src/app/models/cources';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CourcesService } from 'src/app/services/cources.service';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';

@Component({
  selector: 'app-cource-list',
  templateUrl: './cource-list.component.html',
  styleUrls: ['./cource-list.component.scss'],
  providers: [FilterPipe],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CourceListComponent {
  public cources: ICource[] = [];
  public filter_cources: ICource[] = [];
  public search: string = '';
  public addCource:boolean = false;
  public selectedCource: ICource = {
    id: 0,
    title: '',
    topRated: false,
    creationDate: new Date,
    duration: 0,
    description: ''
  };
  constructor(
    private filterPipe: FilterPipe,
    private readonly courcesService: CourcesService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private breadcrumbsService: BreadcrumbsService,
  ) {}

  clickSearch(): void {
    console.log("Поиск по введенному значению: " + this.search);
    this.cources = this.courcesService.getCources();
    this.filter_cources =  this.filterPipe.transform(this.cources, this.search);
  }

  ngOnInit(): void {
    this.cources = this.courcesService.getCources();
    this.filter_cources = this.cources;
    this.breadcrumbsService.data = {
      home: this.breadcrumbsService.home,
      model: [],
    }
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
      acceptLabel:"Удалить",
      rejectLabel:"Отмена",
      header: 'Подтверждение действия',
      message: 'Вы действительно хотите удалить данный курс?',
      accept: () => {
        this.courcesService.deleteCource(cource.id);
        this.cources = this.courcesService.getCources();
      },
      reject: () => {
        this.confirmationService.close();
      }, 
      key: "cd"
    });
  }

  public loadMore(): void {
    console.log("Загрузить еще")
  }

  public cancelAction(): void {
    this.addCource = false;
  }
  public editAction(): void {
    this.addCource = false;
  }
}


