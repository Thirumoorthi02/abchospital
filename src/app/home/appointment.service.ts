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
        const params = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
        return this.http.get(`${Constants.API_URLS.getPatientDetails}${params}/`);
    }

    /**
     * Get method to get slots details for the particular date
     */
    public getSlotDetails(date: Date): Observable<any> {
        // return of(slotDetailsMock);
        const params = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
        return this.http.get(`${Constants.API_URLS.getSlotDetails}${params}/`);
    }

    /**
     * Put method to add slots details for the particular date
     */
    public addSlot(date: Date, reqObj): Observable<any> {
        const params = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
        return this.http.put(`${Constants.API_URLS.addSlots}${params}/`, reqObj);
    }
}
