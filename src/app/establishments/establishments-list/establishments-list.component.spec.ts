import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentsListComponent } from './establishments-list.component';

describe('EstablishmentsListComponent', () => {
  let component: EstablishmentsListComponent;
  let fixture: ComponentFixture<EstablishmentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
