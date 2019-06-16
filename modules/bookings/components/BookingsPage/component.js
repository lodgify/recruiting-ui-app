import React from 'react';
import { func, bool } from 'prop-types';
import { BookingArrayProps } from '../../state/state';

import Sidebar from './Sidebar';
import MainContent from './MainContent';

import styles from './index.css';

export class Component extends React.PureComponent {
  static displayName = 'BookingsPage';
  static propTypes = {
    fetchBookings: func.isRequired,
    isLoading: bool,
    hasFailed: bool,
    data: BookingArrayProps,
  };

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    if (this.props.isLoading) return 'Loading…';
    if (this.props.hasFailed || !this.props.data) return 'Failed :(';

    return (
      <div className={styles.layout}>
        <Sidebar bookings={this.props.data} />
        <MainContent />
      </div>
    );
  }
}
