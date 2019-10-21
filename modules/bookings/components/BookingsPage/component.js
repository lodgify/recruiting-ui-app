import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';

import CalendarLogo from '../../../../static/calendar.svg';
import { noop } from '../../../utils/noop';
import { BookingsList } from '../BookingsList';
import { Button } from '../Button';
import styles from './styles.css';

export class Component extends React.PureComponent {
  static displayName = 'BookingsPage';
  static propTypes = {
    fetchBookings: func.isRequired,
    isLoading: bool,
    hasFailed: bool,
    data: arrayOf(shape({ guestName: string })),
  };

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    if (this.props.isLoading) return 'Loading…';
    if (this.props.hasFailed || !this.props.data) return 'Failed :(';

    return (
      <div className={styles.container}>
        <div className={styles.list}>
          <BookingsList bookings={this.props.data} />
        </div>
        <div className={styles.content}>
          <CalendarLogo />
          <h1 className={styles.title}>Reservations</h1>
          <p>Select any reservation item</p>
          <div className={styles.buttonGroup}>
            <Button onClick={noop}>Create Booking</Button>
            <Button onClick={noop}>Create Booking with Quote</Button>
          </div>
        </div>
      </div>
    );
  }
}
