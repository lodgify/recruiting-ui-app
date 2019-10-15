import React from 'react';
import styles from './styles.css';
import CalendarLogo from 'static/calendar.svg';
import CreateBooking from './createBooking';

function ReservationContent() {
  return (
    <div className={styles.reservationsLayout}>
      <div>
        <CalendarLogo />
        <p className={styles.reservationText}>Reservations</p>
        <p>select any reservation item</p>
      </div>
      <div style={{ marginTop: 30 }}>
        <CreateBooking
          buttonStyle={styles.bookingButton}
          buttonText={'Create Booking'}
        />
        <div>
          <button className={styles.bookingButton} style={{ marginTop: 10 }}>
            <p>Create Booking with Quote</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReservationContent;
