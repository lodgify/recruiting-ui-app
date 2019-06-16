import React, { Component } from 'react';

import { BookingProps } from '../../../../../state/state';

import ReplyLogo from '../../../../../../../static/reply.svg';
import PersonLogo from '../../../../../../../static/person.svg';
import NightsLogo from '../../../../../../../static/moon.svg';

import styles from './index.css';

class Item extends Component {
  static propTypes = {
    item: BookingProps,
  };

  getStatusColor = () => {
    const { status } = this.props.item;

    let statusColor = '';
    switch (status) {
      case 'Booked':
        statusColor = 'green';
        break;
      case 'Declined':
        statusColor = 'red';
        break;
      case 'Unavailable':
        statusColor = 'gray';
        break;
      case 'Tentative':
      case 'Open':
      default:
        statusColor = 'orange';
    }
    return statusColor;
  };

  formatDateArrival = () => {
    const { dateArrival } = this.props.item;
    const splittedDate = dateArrival.toString().split(' ');
    return (
      splittedDate[1] + ' ' + splittedDate[2] + ' ' + splittedDate[3] + ','
    );
  };

  formatDateCreated = () => {
    const { dateCreated } = this.props.item;
    const splittedDate = dateCreated.toString().split(' ');

    const numberMonth =
      dateCreated.getMonth() + 1 < 10
        ? '0' + (dateCreated.getMonth() + 1)
        : dateCreated.getMonth() + 1;

    return numberMonth + '/' + splittedDate[2] + '/' + splittedDate[3];
  };

  getNumberOfNights = () => {
    const { dateArrival, dateDeparture } = this.props.item;
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(
      Math.abs(dateDeparture.getTime() - dateArrival.getTime()),
    );
    const numberOfNights = Math.ceil(diffDays / oneDay);

    return numberOfNights;
  };

  render() {
    const {
      guestName,
      amountPaid,
      currencyCode,
      propertyName,
      replied,
      people,
    } = this.props.item;

    return (
      <div className={styles.Item}>
        <div className={styles.ItemStatus}>
          <svg height="8" width="8">
            <circle cx="4" cy="4" r="4" fill={this.getStatusColor()} />
          </svg>

          <div>{replied ? <ReplyLogo /> : ''}</div>
        </div>

        <div className={styles.ItemContent}>
          <div className={styles.GuestName}>
            <p>{guestName || '--'}</p>
            <p>{this.formatDateCreated() || '--'}</p>
          </div>

          <div className={styles.PropertyName}>
            <p>{propertyName || '--'}</p>
          </div>

          <div className={styles.ItemDetails}>
            <p>
              {this.formatDateArrival() || '--'}{' '}
              {this.getNumberOfNights() || '-'} <NightsLogo /> {people || '-'}{' '}
              <PersonLogo />
            </p>

            <p>
              {amountPaid
                ? amountPaid.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'currency',
                    currency: `${currencyCode}`,
                  })
                : '--'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
