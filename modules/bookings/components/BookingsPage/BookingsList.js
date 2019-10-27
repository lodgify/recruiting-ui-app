import React, { useState } from 'react';
import {arrayOf, shape, string } from 'prop-types';

const BookingsList = props => {

  const [filter, setFilter] = useState('');

  const filteredBookings = props.data.filter(booking => booking.guestName.toLowerCase().includes(filter))

  return (
    <>
        <input type="text" value={filter} onChange={e => setFilter(e.target.value)}></input>
        <p>{filter}</p>
        {filteredBookings.map(booking => {
        return (
            <div key={booking.id}>
                <p>{booking.guestName}</p>
            </div>
        )
        })}
    </>
    );
}

BookingsList.propTypes = {
  data: arrayOf(shape({ guestName: string })),
};

export default BookingsList;
