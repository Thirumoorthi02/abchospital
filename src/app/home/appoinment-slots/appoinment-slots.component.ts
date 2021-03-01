import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants/constants';
import { SharedDataService } from 'src/app/shared-service/shared-data.service';
import { SlotDetails } from '../appointment-modal';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appoinment-slots',
  templateUrl: './appoinment-slots.component.html',
  styleUrls: ['./appoinment-slots.component.scss'],
  providers: [AppointmentService]
})
export class AppoinmentSlotsComponent implements OnInit, AfterViewInit {

  public morningSlots = [];
  public eveningSlots = [];
  public selectedDate = new Date();
  public today = new Date();
  public openAddSlotsModal = false;
  public addForMorningSlot = false;

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
    private appointmentService: AppointmentService,
    private sharedDataService: SharedDataService
  ) { }


  ngOnInit(): void {
    this.fetchSlotDetails();
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  private populateSlotDetails(data: any = {}): void {
    ((data && data.slotDetails) || []).forEach(slot => {
      this.openAddSlotsModal = false;
      const slotDetails = new SlotDetails(slot);
      if (slotDetails.timing.toLowerCase() === 'evening') {
        this.eveningSlots.push(slotDetails);
      } else {
        this.morningSlots.push(slotDetails);
      }
    });
  }

  /**
   * Function to fetch slot details
   */
  public fetchSlotDetails(selectedDate: Date = this.selectedDate): void {
    this.sharedDataService.setLoader(true);
    this.morningSlots = [];
    this.eveningSlots = [];
    this.appointmentService.getSlotDetails(selectedDate).subscribe(data => {
      this.sharedDataService.setLoader(false);
      this.populateSlotDetails(data);
    }, (err) => {
      this.sharedDataService.setLoader(false);
      console.log(err);
    });
  }

  /**
   * Function to navigate to home screen
   */
  public goToHomeScreen(): void {
    this.router.navigate(['']);
  }

  /**
   * Function to open add slots modal
   */
  public addSlots(isMorningSlot = true): void {
    this.addForMorningSlot = isMorningSlot;
    this.openAddSlotsModal = true;
  }

  /**
   * Function to fetch available slots for the particular date
   */
  public dateChanged(selectedDate): void {
    this.selectedDate = selectedDate;
    this.fetchSlotDetails(selectedDate);
  }

  /**
   * Function to addd a slot
   */
  public addSlotSuccess(res): void {
    this.morningSlots = [];
    this.eveningSlots = [];
    this.populateSlotDetails(res);
  }

}
