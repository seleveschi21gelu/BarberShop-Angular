import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberViewByIdComponent } from './barber-view-by-id.component';

describe('BarberViewByIdComponent', () => {
  let component: BarberViewByIdComponent;
  let fixture: ComponentFixture<BarberViewByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarberViewByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberViewByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
