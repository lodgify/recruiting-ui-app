import React from 'react';
import PropTypes from 'prop-types';
import { format, differenceInCalendarDays } from 'date-fns';
import styles from './styles.css';
import CircleIcon from '../../../../static/circle.svg';
import ReplyIcon from '../../../../static/reply.svg';
import MoonIcon from '../../../../static/moon.svg';
import UserIcon from '../../../../static/user.svg';

export default function BookingItem({ booking }) {
  const bookingStatus = {
    Booked: 'green',
    Declined: 'red',
    Unavailable: 'gray',
    Tentative: 'orange',
    Open: 'orange',
  };

  return (
    <div className={styles.BookingItem}>
      <CircleIcon
        className={styles.Center}
        style={{ fill: [bookingStatus[booking.status]] }}
      />
      <div className={styles.Title}>{booking.guestName}</div>
      <div className={styles.Center}>
        {format(booking.dateCreated, 'dd/MM/yyyy')}
      </div>
      <div className={styles.Center}>
        {booking.replied ? <ReplyIcon width="1rem" height="1rem" /> : null}
      </div>
      <div>{booking.propertyName}</div>
      <div className={styles.Details}>
        <span>{format(booking.dateArrival, 'MMM dd yyyy')}, </span>
        <span>
          {differenceInCalendarDays(booking.dateDeparture, booking.dateArrival)}{' '}
          <MoonIcon width="1rem" height="1rem" />
        </span>
        <span>
          {' '}
          {booking.people} <UserIcon width="1rem" height="1rem" />
        </span>
      </div>
      <div className={styles.Price}>
        {booking.amountPaid} {booking.currencyCode}
      </div>
    </div>
  );
}

BookingItem.propTypes = {
  booking: PropTypes.object,
};
