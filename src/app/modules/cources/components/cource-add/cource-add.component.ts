import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take, tap } from 'rxjs';
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
  public cource: ICource = {} as ICource;
  public pageHeader: string = "Новый курс";
  public courceId = undefined as unknown as number;

  public courceAddForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    duration: [null, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(1), Validators.max(6000)]],
    creationDate: [null, [Validators.required]],
    authors: [null],
  });
  constructor(
    private readonly courcesService: CourcesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.pageHeader = "Редактирование курса";
    const { courceId } = this.activatedRoute.snapshot.params;
    if (courceId) {
      this.courcesService
        .getCourceById(courceId)
        .pipe(take(1))
        .subscribe((data) => {
          data[0].creationDate = new Date(data[0].creationDate);
          this.courceAddForm.patchValue(data[0]);
          this.cource = data[0];
        });
      this.courceId = +courceId;
    }

    this.breadcrumbsService.data = {
      home: this.breadcrumbsService.home,
      model: [{ label: this.cource?.title != "" ? this.cource.title : this.pageHeader }],
    };
  }

  get title(): FormControl {
    return this.courceAddForm.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.courceAddForm.get('description') as FormControl;
  }

  get duration(): FormControl {
    return this.courceAddForm.get('duration') as FormControl;
  }

  get creationDate(): FormControl {
    return this.courceAddForm.get('creationDate') as FormControl;
  }

  get authors(): FormControl {
    return this.courceAddForm.get('authors') as FormControl;
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
    if (!this.courceAddForm.valid) return;
    if (!this.courceId && this.courceId != 0) {
      this.courcesService.createCource(this.courceAddForm.value).pipe(take(1)).subscribe({
        next: (data) => {
          this.router.navigate(['cources']);
        },
      });
    } else {
      this.courcesService.updateCource({...this.cource, ...this.courceAddForm.value}).subscribe({
        next: (data) => {
          this.router.navigate(['cources']);
        },
      });
    }
    
  }
}
