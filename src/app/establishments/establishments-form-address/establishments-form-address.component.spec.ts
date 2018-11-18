import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentsFormAddressComponent } from './establishments-form-address.component';

describe('EstablishmentsFormAddressComponent', () => {
  let component: EstablishmentsFormAddressComponent;
  let fixture: ComponentFixture<EstablishmentsFormAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentsFormAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentsFormAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
