export class Patient {
    public patientName = '';
    public contact = '';
    public appointmentTime = '';
    public slotid = '';
    public gender = '';
    public age = 0;
    public fromTime: { hours: string, minutes: string };
    public toTime: { hours: string, minutes: string };

    constructor(patient: any = {}) {
        this.patientName = patient.patientName || '';
        this.contact = patient.contact || '';
        this.slotid = patient.slotid || '';
        this.gender = patient.gender || '';
        this.age = patient.age || 0;
        this.fromTime = {
            hours: (patient.fromTime || {}).hours || '',
            minutes: (patient.fromTime || {}).minutes || ''
        };
        this.toTime = {
            hours: (patient.toTime || {}).hours || '',
            minutes: (patient.toTime || {}).minutes || ''
        };
        this.populateAppointmentTime();
    }

    private populateAppointmentTime(): void {
        const hours = (Number(this.fromTime.hours) % 12) || 12;
        const minutes = this.fromTime.minutes;
        const ampm = (Number(this.fromTime.hours) < 12 || Number(this.fromTime.hours) === 24) ? 'AM' : 'PM';
        this.appointmentTime = `${hours}:${minutes} ${ampm}`;
    }
}

export class SlotDetails {
    public booked = false;
    public slotId = 0;
    public fromTime: { hours: string, minutes: string };
    public toTime: { hours: string, minutes: string };
    public timing: string;
    public slotTime = '';

    constructor(slot: any = {}) {
        this.booked = slot.booked || false;
        this.fromTime = {
            hours: (slot.fromTime || {}).hours || '',
            minutes: (slot.fromTime || {}).minutes || ''
        };
        this.toTime = {
            hours: (slot.toTime || {}).hours || '',
            minutes: (slot.toTime || {}).minutes || ''
        };
        this.timing = slot.timing || '';
        this.slotId = slot.slotId || 0;
        this.populateSlotTime();
    }

    private populateSlotTime(): void {
        const hours = (Number(this.fromTime.hours) % 12) || 12;
        const minutes = this.fromTime.minutes;
        const ampm = (Number(this.fromTime.hours) < 12 || Number(this.fromTime.hours) === 24) ? 'AM' : 'PM';
        this.slotTime = `${hours}:${minutes} ${ampm}`;
    }
}
