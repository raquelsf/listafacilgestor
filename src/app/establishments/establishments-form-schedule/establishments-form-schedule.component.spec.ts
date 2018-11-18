import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentsFormScheduleComponent } from './establishments-form-schedule.component';

describe('EstablishmentsFormScheduleComponent', () => {
  let component: EstablishmentsFormScheduleComponent;
  let fixture: ComponentFixture<EstablishmentsFormScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentsFormScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentsFormScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
