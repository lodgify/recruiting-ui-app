import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import BookingsListItem from '../BookingListItem/component';
import withStringifiedDates from '../BookingListItem/withStringifiedDates';

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const BookingsList = ({ list }) => (
  <ul className={styles.BookingUl}>
    {list &&
      list.map(booking => withStringifiedDates(booking)(BookingsListItem))}
  </ul>
);

BookingsList.displayName = 'BookingsList';
BookingsList.propTypes = propTypes;

export default BookingsList;
