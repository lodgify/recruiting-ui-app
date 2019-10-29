import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const propTypes = {
  amountDue: PropTypes.number,
  amountPaid: PropTypes.number,
  currencyCode: PropTypes.string,
  dateArrival: PropTypes.string,
  dateCreated: PropTypes.string,
  dateDeparture: PropTypes.string,
  dateModified: PropTypes.string,
  guestName: PropTypes.string,
  id: PropTypes.string,
  people: PropTypes.number,
  propertyId: PropTypes.string,
  propertyName: PropTypes.string,
  read: PropTypes.bool,
  replied: PropTypes.bool,
  status: PropTypes.string,
  totalAmount: PropTypes.number,
  stayNights: PropTypes.number
};

const BookingsListItem = ({ amountPaid, guestName, propertyName, people, dateArrival, dateCreated, stayNights }) => {
  return (
    <li className={styles.BookingListItem}>
      <strong>{guestName}</strong>
      <span className={styles.DateCreated}>{dateCreated}</span>
      <p>{propertyName}</p>
      <div className={styles.BookingsListItemFooter}>
        <span>{dateArrival} |</span><span>{stayNights} night|</span><span>{people} person</span>
        <span className={styles.AmountPaid}>{amountPaid}</span>
      </div>
    </li>
  );
};

BookingsListItem.displayName = 'BookingsListItem';
BookingsListItem.propTypes = propTypes;

export default BookingsListItem;
