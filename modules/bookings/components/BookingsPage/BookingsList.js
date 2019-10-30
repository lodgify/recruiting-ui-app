import React, { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import BookingItem from '../BookingItem';
import styles from './styles.css';

const BookingsList = props => {
  const [filter, setFilter] = useState('');

  const [selectedBooking, setSelectedBooking] = useState('');

  const filteredBookings = props.data.filter(booking =>
    booking.guestName.toLowerCase().includes(filter.toLowerCase()),
  );


  return (
    <div className={styles.BookingsList}>
      <div className={styles.Header}>
        <input
          className={styles.Search}
          placeholder="Search"
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>

      <div className={styles.List}>
        {filteredBookings.map(booking => (
          <BookingItem key={booking.id} booking={booking} selectedBooking={selectedBooking} setSelectedBooking={setSelectedBooking} />
        ))}
      </div>

      <div className={styles.Footer}>
        <button className={styles.BookButton}>Book Now</button>
      </div>
    </div>
  );
};

BookingsList.propTypes = {
  data: arrayOf(shape({ guestName: string })),
};

export default BookingsList;
