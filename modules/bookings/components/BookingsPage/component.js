import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';

import BookingList from './BookingList'
import CalendarLogo from '../../../../static/calendar.svg';
import styles from './styles.scss';

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
      <div className={styles.Page}>
        <div className={styles.Main}>
          <CalendarLogo />
          <h1>Reservations</h1>
          <p>Select any reservation item</p>

          <div className={styles.buttons}>
            <button>Create Booking</button>
            <button>Create Booking with Quote</button>
          </div>
        </div>

        <div className={styles.Sidebar}>
          { <BookingList data={this.props.data} /> }
        </div>
      </div>
    );
  }
}
