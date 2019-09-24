import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';
import styles from './styles.scss';
import BookingsMainPage from './MainPage/MainPage';
import BookingsList from './List/List'; 

export class Component extends React.PureComponent {
  static displayName = 'BookingsPage';
  static propTypes = {
    fetchBookings: func.isRequired,
    filterBookings: func.isRequired,
    isLoading: bool,
    hasFailed: bool,
    data: arrayOf(shape({ guestName: string })),
    filteredData: arrayOf(shape({ guestName: string })),
  };

  componentDidMount() {
    this.props.fetchBookings();
  }


  render() {
    if (this.props.isLoading) return 'Loading…';
    if (this.props.hasFailed || !this.props.data) return 'Failed :(';

    return (
      <div className={styles.GridContainer}>
        <BookingsList users={this.props.data} filteredBooking={this.props.filteredData} filterBookings={this.props.filterBookings} />
        <BookingsMainPage />
      </div>
    );
  }
}

