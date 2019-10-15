import React, { useState } from 'react';
import { statusColors } from 'constants/colors';
import styles from './styles.css';
import ReservationItem from './reservationItem';
import { arrayOf, shape, string } from 'prop-types';
import { daysLeft } from 'helpers';

function ReservationList({ data }) {
  const [selectedItemId, setSelectedItemId] = useState('');
  const dateFormat = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  function pickListItemInfo(reservation) {
    const {
      dateDeparture,
      dateCreated,
      status,
      dateArrival,
      amountPaid,
      guestName,
      people,
      propertyName,
      replied,
      id,
    } = reservation;
    const leftDays = daysLeft(dateDeparture, dateCreated);
    const statusColor = statusColors[status.toLowerCase()];
    const bookingDate = new Date(dateCreated).toLocaleDateString();
    const arrivalDate = new Date(dateArrival).toLocaleDateString(
      'en-US',
      dateFormat,
    );

    return {
      leftDays,
      statusColor,
      bookingDate,
      arrivalDate,
      amountPaid,
      guestName,
      people,
      propertyName,
      replied,
      id,
    };
  }

  function onSelectItem(id) {
    if (id !== selectedItemId) {
      setSelectedItemId(id);
    }
  }

  return (
    <div className={styles.listContainer}>
      {data.map(reservation => {
        const reservationInfo = pickListItemInfo(reservation);
        const isSelected = reservation.id === selectedItemId;
        return (
          <ReservationItem
            key={reservation.id}
            {...reservationInfo}
            onSelectItem={onSelectItem}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
}

ReservationList.propTypes = {
  data: arrayOf(shape({ guestName: string })),
};

export default ReservationList;
