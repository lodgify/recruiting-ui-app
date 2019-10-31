import React from 'react';
import PropTypes from 'prop-types';
import BookingItem from '../BookingItem';
import './styles.css';

export default function BookingList({ bookings }) {
  return (
    <ul>
      {bookings.map(booking => (
        <BookingItem key={booking.id} booking={booking} />
      ))}
    </ul>
  );
}

BookingList.propTypes = {
  bookings: PropTypes.array.isRequired,
};
