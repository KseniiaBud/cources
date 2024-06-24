import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICource } from 'src/app/models/cources';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';
import { CourcesService } from 'src/app/services/cources.service';

@Component({
  selector: 'app-cource-add',
  templateUrl: './cource-add.component.html',
  styleUrls: ['./cource-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceAddComponent {
  public cource: ICource = {
    id: 0,
    title: '',
    creationDate: new Date(),
    topRated: false,
    duration: 0,
    description: '',
    autors: ""
  };
  public pageHeader: string = "Новый курс";
  @Input() courceId!: number;

  constructor(
    private readonly courcesService: CourcesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService,
  ) { }

  ngOnInit() {
    console.log("ngOnInit");
    const { courceId } = this.activatedRoute.snapshot.params;
    if (courceId) {
      this.pageHeader = "Редактирование курса";
      this.cource = this.courcesService.getCourceById(+courceId);
      this.courceId = +courceId;
    }

    this.breadcrumbsService.data = {
      home: this.breadcrumbsService.home,
      model: [{ label: this.cource?.title != "" ? this.cource.title : this.pageHeader }],
    };
  }

  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  cancelAction() {
    this.router.navigate(['cources']);
  }
  saveCourse() {
    debugger
    if (!this.courceId && this.courceId != 0) {
      this.courcesService.createCource(this.cource);
    } else {
      this.courcesService.updateCource(this.cource);
    }
    this.router.navigate(['cources']);
  }
}
