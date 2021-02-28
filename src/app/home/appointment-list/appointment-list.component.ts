import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants/constants';
import { SharedDataService } from 'src/app/shared-service/shared-data.service';
import { Patient } from '../appointment-modal';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
  providers: [AppointmentService]
})
export class AppointmentListComponent implements OnInit, AfterViewInit {

  public patients: Patient[] = [];
  public selectedDate = new Date();

  constructor(
    private cd: ChangeDetectorRef,
    private router: Router,
    private appointmentService: AppointmentService,
    private sharedDataService: SharedDataService
  ) { }


  ngOnInit(): void {
    this.fetchPatientDetails();
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges();
  }

  /**
   * Function to fetch patient details
   */
  public fetchPatientDetails(selectedDate: Date = this.selectedDate): void {
    this.sharedDataService.setLoader(true);
    this.appointmentService.getPatientDetails(selectedDate).subscribe(data => {
      this.sharedDataService.setLoader(false);
      this.patients = (data.patientDetails || []).map(patient => new Patient(patient));
    }, (err) => {
      this.sharedDataService.setLoader(false);
      console.log(err);
    });
  }

  /**
   * Function to navigate to schedule appointments screen
   */
  public goToScheduleSlots(): void {
    this.router.navigate([Constants.ROUTES.scheduleAppointment]);
  }

  /**
   * Function to fetch patient details when date is changed
   */
  public dateChanged(selectedDate): void {
    this.fetchPatientDetails(selectedDate);
  }

}
