import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentViewByIdComponent } from './appointment-view-by-id.component';

describe('AppointmentViewByIdComponent', () => {
  let component: AppointmentViewByIdComponent;
  let fixture: ComponentFixture<AppointmentViewByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentViewByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentViewByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
