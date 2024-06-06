import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceAddComponent } from './cource-add.component';

describe('CourceAddComponent', () => {
  let component: CourceAddComponent;
  let fixture: ComponentFixture<CourceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
