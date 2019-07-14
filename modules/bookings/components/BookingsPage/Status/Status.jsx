import React from 'react';
import PropTypes from 'prop-types';
import styles from './status.css';

const chooseColor = str => {
  switch (str) {
    case 'Open':
      return styles.open;
      break;
    case 'Tentative':
      return styles.tentative;
      break;
    case 'Booked':
      return styles.booked;
      break;
    case 'Declined':
      return styles.declined;
      break;
    default:
      return styles.unavailable;
  }
};

const Status = ({ status = 'Unavailable' }) => {
  const statusColor = chooseColor(status);
  return <article className={statusColor} />;
};

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;
