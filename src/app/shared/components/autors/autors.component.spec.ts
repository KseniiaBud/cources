import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorsComponent } from './autors.component';

describe('AutorsComponent', () => {
  let component: AutorsComponent;
  let fixture: ComponentFixture<AutorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutorsComponent]
    });
    fixture = TestBed.createComponent(AutorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});