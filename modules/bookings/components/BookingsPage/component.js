import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';

import CalendarLogo from '../../../../static/calendar.svg';
import FilterIcon from '../../../../static/filter.svg';
import DownloadIcon from '../../../../static/download.svg';
import ReloadIcon from '../../../../static/reload.svg';
import styles from './styles.css';
import SearchBox from '../../../common/components/SearchBox';
import BookingItem from '../BookingItem';

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
      <div className={styles.MainContainer}>
        <div className={styles.SidebarContainer}>
          <div className={styles.FilterContainer}>
            <SearchBox className={styles.SearchBox} />
            <FilterIcon className={styles.Center} />
          </div>
          <div className={styles.BookingsContainer}>
            <ul>
              {this.props.data.map(booking => (
                <BookingItem key={booking.id} booking={booking} />
              ))}
            </ul>
          </div>
          <div className={styles.Footer}>
            <div className={styles.SelectContainer}>
              <span className={styles.Center}>Select</span>
              <DownloadIcon className={styles.Center} />
              <ReloadIcon className={styles.Center} />
            </div>
            <button className={styles.BookButton}>CREATE BOOKING</button>
          </div>
        </div>
        <div className={styles.MainSection}>
          <div className={styles.WelcomeContainer}>
            <h1 className={styles.Title}>Welcome!</h1>
            <CalendarLogo />
          </div>
        </div>
      </div>
    );
  }
}
