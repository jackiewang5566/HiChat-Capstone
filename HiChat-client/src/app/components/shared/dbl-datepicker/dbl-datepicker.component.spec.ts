import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DblDatepickerComponent } from './dbl-datepicker.component';

describe('DblDatepickerComponent', () => {
  let component: DblDatepickerComponent;
  let fixture: ComponentFixture<DblDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DblDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DblDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
