import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constants } from './constants/constants';
import { AppoinmentSlotsComponent } from './home/appoinment-slots/appoinment-slots.component';
import { AppointmentListComponent } from './home/appointment-list/appointment-list.component';


const routes: Routes = [
  { path: '', component: AppointmentListComponent },
  { path: Constants.ROUTES.appointmentList, component: AppointmentListComponent },
  { path: Constants.ROUTES.scheduleAppointment, component: AppoinmentSlotsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
