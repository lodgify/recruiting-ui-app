import React from 'react';
import { object } from 'prop-types';
import { format, differenceInCalendarDays } from 'date-fns';

import styles from './styles.css';
import ReplyIcon from '../../../../static/reply.svg';

const BookingItem = ({ booking, setSelectedBooking, selectedBooking }) => {
  const bookingStatus = {
    Booked: 'Green',
    Unavailable: 'Gray',
    Tentative: 'Orange',
    Open: 'Orange',
    Declined: 'Red',
  };

  return (
    <div className={`${styles.BookingItem} ${selectedBooking === booking.id ? styles.IsSelected : ''}`} onClick={() => setSelectedBooking(booking.id)}>
      <div className={styles.Row}>
        <div className={styles.GuestName}>
          <div
            className={`${styles.StatusIndicator} ${
              styles[bookingStatus[booking.status]]
            }`}
          />
          {booking.guestName}
        </div>
        <div className={styles.CreatedDate}>
          {format(booking.dateCreated, 'dd/MM/yyyy')}
        </div>
      </div>

      <div className={styles.Row}>
        <div>
          {booking.replied ? <ReplyIcon width="1rem" height="1rem" /> : null}
          {booking.propertyName}
        </div>
      </div>

      <div className={styles.Row}>
        <div>
          <span>{format(booking.dateArrival, 'MMM dd yyyy')}, </span>
          <span>
            {differenceInCalendarDays(booking.dateDeparture, booking.dateArrival)} nights
          </span>
          <span> {booking.people} people</span>
        </div>
        <span className={styles.Currency}>
          {booking.amountPaid} {booking.currencyCode}
        </span>
      </div>
    </div>
  );
};

BookingItem.propTypes = {
  booking: object,
};

export default BookingItem;
