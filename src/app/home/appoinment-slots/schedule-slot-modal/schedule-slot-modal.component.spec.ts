import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSlotModalComponent } from './schedule-slot-modal.component';

describe('ScheduleSlotModalComponent', () => {
  let component: ScheduleSlotModalComponent;
  let fixture: ComponentFixture<ScheduleSlotModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleSlotModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSlotModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
