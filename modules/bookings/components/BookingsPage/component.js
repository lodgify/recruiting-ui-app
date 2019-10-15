import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';

import styles from './styles.css';

import SideBar from './sideBar';
import ReservationContent from './reservationContent';

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
      <div className={styles.layout}>
        <SideBar data={this.props.data} />
        <ReservationContent />
      </div>
    );
  }
}
