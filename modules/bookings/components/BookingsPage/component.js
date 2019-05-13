import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';
import BookingMain from './BookingMain';
import BookingSidebar from './BookingSidebar';

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
    const bookings = this.props.data;
    return (
      <>
        <BookingSidebar bookings={bookings} />
        <BookingMain />
      </>
    );
  }
}
