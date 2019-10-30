import React, { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';

import BookingItem from '../BookingItem'
import styles from './styles.css';

const BookingsList = props => {
  const [filter, setFilter] = useState('');

  const filteredBookings = props.data.filter(booking =>
    booking.guestName.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={styles.BookingsList}>
      <input
        placeholder="Search"
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      {filteredBookings.map(booking => <BookingItem key={booking.id} booking={booking}></BookingItem>)}
    </div>
  );
};

BookingsList.propTypes = {
  data: arrayOf(shape({ guestName: string })),
};

export default BookingsList;
