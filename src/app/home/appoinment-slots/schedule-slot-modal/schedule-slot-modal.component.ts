import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SharedDataService } from 'src/app/shared-service/shared-data.service';
import { AppointmentService } from '../../appointment.service';

@Component({
  selector: 'app-schedule-slot-modal',
  templateUrl: './schedule-slot-modal.component.html',
  providers: [AppointmentService],
  styleUrls: ['./schedule-slot-modal.component.scss']
})
export class ScheduleSlotModalComponent implements OnInit {

  public fromTimeHours: string;
  public from: string;
  public to: string;
  @Output() public bookSlot = new EventEmitter();
  @Output() public hideModal = new EventEmitter();
  @Input() public isMorningSlot = false;
  @Input() public selectedDate = new Date();
  public showErrorMessage = false;

  constructor(
    private appointmentService: AppointmentService,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Function to schedule
   */
  public schedule(): void {
    if (this.from && this.to) {
      const [fromHours, fromMinutes] = this.from.split(':');
      const [toHours, toMinutes] = this.to.split(':');
      const reqObj = {
        fromTime: {
          hours: fromHours,
          minutes: fromMinutes
        },
        toTime: {
          hours: toHours,
          minutes: toMinutes
        },
        timing: this.isMorningSlot ? 'Morning' : 'Evening'
      };

      this.sharedDataService.setLoader(true);
      this.appointmentService.addSlot(this.selectedDate, reqObj).subscribe(data => {
        this.sharedDataService.setLoader(false);
        this.bookSlot.emit(data);
      }, (err) => {
        this.sharedDataService.setLoader(false);
        this.showErrorMessage = true;
        console.log(err);
      });
    }
  }

  /**
   * Function to close modal
   */
  public closeModal(): void {
    this.hideModal.emit();
  }

  /**
   * Function triggered when time changes
   */
  public fromTimeChanged(time): void {
    this.showErrorMessage = false;
    this.from = time;
    let [hours, minutes] = time.split(':');
    if (Number(minutes) + 30 > 59) {
      minutes = (Number(minutes) + 30) % 60;
      hours = Number(hours) + 1;
    } else {
      minutes = (Number(minutes) + 30);
    }
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    this.to = `${hours}:${minutes}`;
  }
}
