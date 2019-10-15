import React from 'react';
import styles from '../styles.css';
import { string } from 'prop-types';

function ItemHeader({ guestName, bookingDate }) {
  return (
    <div className={styles.headerContainer}>
      <div>
        <p className={styles.guestName}>{guestName}</p>
      </div>
      <div>
        <p className={styles.bookingDate}>{bookingDate}</p>
      </div>
    </div>
  );
}

ItemHeader.propTypes = {
  guestName: string,
  bookingDate: string,
};

export default ItemHeader;
