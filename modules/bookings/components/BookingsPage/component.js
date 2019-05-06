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
      <>
        <h1 className={styles.Title}>Welcome!</h1>
        <CalendarLogo />
        {this.props.data.map(booking => booking.guestName)}
      </>
    );
  }
}
