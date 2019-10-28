import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';

import CalendarLogo from '../../../../static/calendar.svg';
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
      <div className={styles.GridContainer}>
        <div className={`${styles.GridItem} ${styles.ListSection}`}>
          <ul>
            {this.props.data.map(booking => <li key={booking.guestName}>{booking.guestName}</li>)}
          </ul>
        </div>
        <div className={`${styles.GridItem} ${styles.MainSection}`}>
          <h1 className={styles.Title}>Welcome!</h1>
          <CalendarLogo />
        </div>
      </div>
    );
  }
}
