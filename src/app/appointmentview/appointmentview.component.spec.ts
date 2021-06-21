import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentviewComponent } from './appointmentview.component';

describe('AppointmentviewComponent', () => {
  let component: AppointmentviewComponent;
  let fixture: ComponentFixture<AppointmentviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
