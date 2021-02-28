const baseUrl = 'http://localhost:3000/';
export const Constants = {
    ROUTES: {
        appointmentList: 'appointment-list',
        scheduleAppointment: 'appointment-schedule',
    },
    API_URLS: {
        getPatientDetails: `${baseUrl}getappointments/`,
        getSlotDetails: `${baseUrl}getslotdetails/`,
        addSlots: `${baseUrl}addaslot/`
    }
};
