import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICource } from 'src/app/models/cources';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';
import { CourcesService } from 'src/app/services/cources.service';

@Component({
  selector: 'app-cource-add',
  templateUrl: './cource-add.component.html',
  styleUrls: ['./cource-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceAddComponent implements OnInit {
  public cource = {} as ICource;
  public pageHeader: string = "Новый курс";
  public courceId = undefined as unknown as number;

  constructor(
    private readonly courcesService: CourcesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService,
  ) { }

  ngOnInit() {
    this.pageHeader = "Редактирование курса";

    const { courceId } = this.activatedRoute.snapshot.params;
    if (courceId) {
      this.courcesService.getCourceById(Number(courceId)).subscribe((data) => {
        this.cource = data[0];
        this.cource.creationDate = new Date(data[0].creationDate);
      });
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
    if (!this.courceId && this.courceId != 0) {
      this.courcesService.createCource(this.cource).subscribe({
        next: (data) => {
          debugger
        },
      });
    } else {
      this.courcesService.updateCource(this.cource);
    }
    this.router.navigate(['cources']);
  }
}
