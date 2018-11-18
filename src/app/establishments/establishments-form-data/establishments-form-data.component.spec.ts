import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentsFormDataComponent } from './establishments-form-data.component';

describe('EstablishmentsFormDataComponent', () => {
  let component: EstablishmentsFormDataComponent;
  let fixture: ComponentFixture<EstablishmentsFormDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentsFormDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentsFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
