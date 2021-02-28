import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentSlotsComponent } from './appoinment-slots.component';

describe('AppoinmentSlotsComponent', () => {
  let component: AppoinmentSlotsComponent;
  let fixture: ComponentFixture<AppoinmentSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
