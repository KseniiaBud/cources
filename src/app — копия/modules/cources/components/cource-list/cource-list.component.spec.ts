import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceListComponent } from './cource-list.component';

describe('CourceListComponent', () => {
  let component: CourceListComponent;
  let fixture: ComponentFixture<CourceListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourceListComponent]
    });
    fixture = TestBed.createComponent(CourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
