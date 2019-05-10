import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';

import CalendarLogo from '../../../../static/calendar.svg';
import SearchIcon from '../../../../static/search.svg';
import FilterIcon from '../../../../static/filter.svg';
import DownloadIcon from '../../../../static/download.svg';
import ReloadIcon from '../../../../static/reload.svg';
import styles from './styles.css';

import Item from './item';

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
        <div className={styles.Middle}>
          <CalendarLogo />
          <h1 className={styles.Title}>Reservations</h1>
          Select any reservation item<br /><br /><br />
          <button className={styles.StartButtons}>Create Booking</button><br />
          <button className={styles.StartButtons}>Create Booking with Quote</button>
        </div>
        <div className={styles.Left}>
          <div className={styles.Search}>
            <input placeholder="Search" />
            <SearchIcon className={styles.SearchIcon} />
            <FilterIcon className={styles.FilterIcon} />
          </div>
          <div className={styles.List}>
            {this.props.data.map(booking => <Item booking={booking} key={booking.id} />)}
          </div>
          <div className={styles.ListFooter}>
            <div className={styles.FooterButtons}>
              Select
              <DownloadIcon />
              <ReloadIcon />
            </div>
            <button className={styles.CreateBooking}>CREATE BOOKING</button>
          </div>
        </div>
      </>
    );
  }
}
