import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { BreadcrumbsService } from 'src/app/services/breadcrumbs.service';
import { createCource, getCourceById, updateCource } from 'src/app/store/cources/actions/cources-actions.actions';
import { selectCource, selectCources } from 'src/app/store/cources/selectors/cources-selectors.selectors';

@Component({
  selector: 'app-cource-add',
  templateUrl: './cource-add.component.html',
  styleUrls: ['./cource-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourceAddComponent implements OnInit {
  public cource =  this.store.select(selectCource);
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbsService: BreadcrumbsService,
    private fb: FormBuilder,
    private store: Store,
  ) { }

  ngOnInit() {
    this.pageHeader = "Редактирование курса";
    const { courceId } = this.activatedRoute.snapshot.params;
    if (courceId) {
      this.courceId = +courceId;
      this.store.dispatch(getCourceById({ id: courceId }));
    }
    this.breadcrumbsService.data = {
      home: this.breadcrumbsService.home,
      model: [{ label: this.pageHeader }],
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
      this.store.dispatch(createCource({ cource: this.courceAddForm.value }));
    } else {
      // this.store.dispatch(updateCource({...this.cource, ...this.courceAddForm.value}));
    }

  }
}
