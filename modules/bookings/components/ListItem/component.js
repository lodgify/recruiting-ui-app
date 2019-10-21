import React from 'react';
import moment from 'moment';
import classNames from 'classNames/bind';
import { shape } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faMoon, faUser } from '@fortawesome/free-solid-svg-icons';

import { Booking, BookingStatus } from '../../constants';
import { currencyFormatter } from '../../../utils/localization';
import styles from './styles.css';

let cx = classNames.bind(styles);

export const calculateNights = (dateArrival, dateDeparture) =>
  moment(dateDeparture).diff(dateArrival, 'days');

// TODO: get user locale
const USER_LOCALE = 'en-US';

export const formatPaidAmount = (currencyCode, amountPaid) =>
  currencyFormatter(USER_LOCALE, currencyCode).format(amountPaid);

export const Component = props => {
  const { item } = props;

  const dateCreated = item.dateCreated.toLocaleDateString(USER_LOCALE);
  const dateArrival = item.dateArrival.toLocaleDateString(USER_LOCALE, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const statusCircleStyle = cx(styles.statusCircle, {
    booked: item.status === BookingStatus.Booked,
    declined: item.status === BookingStatus.Declined,
    unavailable: item.status === BookingStatus.Unavailable,
    tentativeOrOpen:
      item.status === BookingStatus.Tentative ||
      item.status === BookingStatus.Open,
  });

  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <div className={statusCircleStyle} title={item.status} />
        {item.replied && <FontAwesomeIcon icon={faReply} />}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.guestName}>{item.guestName}</span>
          <span className={styles.dateCreated}>{dateCreated}</span>
        </div>

        {/* TODO: handle overflow */}
        <div className={styles.subheader}>
          <span>{item.propertyName}</span>
        </div>

        <div className={styles.details}>
          <div className={styles.mainDetails}>
            <span className={styles.dateArrival}>{dateArrival}</span>
            <span className={styles.nights}>
              {calculateNights(item.dateArrival, item.dateDeparture)}
              <FontAwesomeIcon icon={faMoon} className={styles.icon} />
            </span>
            <span className={styles.people}>
              {item.people}
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
            </span>
          </div>

          <div className={styles.currencyDetails}>
            <span className={styles.paidAmount}>
              {formatPaidAmount(item.currencyCode, item.amountPaid)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  item: shape(Booking),
};
