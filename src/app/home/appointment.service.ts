import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants/constants';
import { patientDetailsMock, patientMock, slotDetailsMock } from '../mock';

@Injectable()
export class AppointmentService {

    constructor(private http: HttpClient) { }

    /**
     * Get method to get patient details for the particular date
     */
    public getPatientDetails(date: Date): Observable<any> {
        // return of(patientDetailsMock);
        return this.http.get(`${Constants.API_URLS.getPatientDetails}${this.getDDMMYYYY(date)}`);
    }

    /**
     * Get method to get slots details for the particular date
     */
    public getSlotDetails(date: Date): Observable<any> {
        // return of(slotDetailsMock);
        return this.http.get(`${Constants.API_URLS.getSlotDetails}${this.getDDMMYYYY(date)}`);
    }

    /**
     * Put method to add slots details for the particular date
     */
    public addSlot(date: Date, reqObj): Observable<any> {
        return this.http.put(`${Constants.API_URLS.addSlots}${this.getDDMMYYYY(date)}`, reqObj);
    }

    private getDDMMYYYY(date: Date): string {
        const actualDate = date.getDate();
        const dateVal = actualDate < 10 ? `0${actualDate}` : actualDate;
        const actualMonth = date.getMonth() + 1;
        const monthVal = actualMonth < 10 ? `0${actualMonth}` : actualMonth;
        return `${dateVal}-${monthVal}-${date.getFullYear()}`;
    }
}
