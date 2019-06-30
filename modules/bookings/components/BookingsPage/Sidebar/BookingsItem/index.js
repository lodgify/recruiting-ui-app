import React, { Component } from 'react';
import { object } from 'prop-types';

import IconReply from 'static/reply.svg';
import IconPerson from 'static/person.svg';
import IconNights from 'static/moon.svg';

import styles from './index.scss';

// retrive the badge color from the status field.
const getBadgeColor = status => {
  return status === 'Booked'
    ? 'green'
    : status === 'Declined'
    ? 'red'
    : status === 'Unavailable'
    ? 'gray'
    : 'orange';
};

// format the date per date's type.
const formatDate = (type, date) => {
  let options = {};

  if (type === 'arrival') {
    options.month = 'short';
    options.day = '2-digit';
    options.year = 'numeric';
  }

  return (
    new Intl.DateTimeFormat('en-US', options).format(date).replace(',', '') ||
    '-'
  );
};

// calculate the nights between the arrival and departure dates.
const calcNights = (arrival, departure) => {
  const day = 1000 * 60 * 60 * 24;
  const diff = Math.round(Math.abs(departure.getTime() - arrival.getTime()));
  return Math.ceil(diff / day) || '-';
};

// format the price based on response currencyCode. if you need the Decimals remove the fractions fields!
const formatPrice = (amount, currency) => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

class BookingsItem extends Component {
  static propTypes = {
    item: object,
  };

  render() {
    const {
      status,
      replied,
      guestName,
      propertyName,
      dateArrival,
      dateDeparture,
      dateCreated,
      people,
      amountPaid,
      currencyCode,
    } = this.props.item;

    return (
      <div className={styles.item}>
        <div className={styles.status}>
          <span style={{ background: getBadgeColor(status) }} />
          {replied ? <IconReply /> : ''}
        </div>

        <div className={styles.content}>
          <div className={styles.guest}>
            <p>{guestName || '-'}</p>
            <label>{formatDate('', dateCreated)}</label>
          </div>

          <div className={styles.property}>
            <p>{propertyName || '-'}</p>
          </div>

          <div className={styles.detail}>
            <p>
              {formatDate('arrival', dateArrival)}
              {', '}
              {calcNights(dateArrival, dateDeparture)} <IconNights />
              {people || '-'} <IconPerson />
            </p>

            <p className={styles.price}>
              {formatPrice(amountPaid, currencyCode)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingsItem;
