import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ICource, ICourceResponse } from 'src/app/models/cources';
import { CourcesService } from 'src/app/services/cources.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent {
  @Input() cource: ICource = {
    id: 0,
    title: '',
    creationDate: new Date(),
    topRated: false,
    duration: 0,
    description: ''
  };
  @Output() public edit: EventEmitter<ICource> = new EventEmitter<ICource>();
  @Output() public delete: EventEmitter<ICource> = new EventEmitter<ICource>();
  visible: boolean = false;

  constructor(
    private readonly courcesService: CourcesService
  ) { }

  clickEdit(cource: ICource) {
    this.edit.emit(cource);
  }
  del(cource: ICource) {
    debugger
         this.delete.emit(cource);
  }

  ngOnInit() {
    console.log("ngOnInit");
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
}
