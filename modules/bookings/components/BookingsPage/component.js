import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';

import CalendarLogo from '../../../../static/calendar.svg';
import styles from './styles.css';
import SearchBar from './SearchBar/component';
import BookingsList from './BookingsList/component';

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
    const { isLoading, hasFailed, data } = this.props;
    if (isLoading) return 'Loading…';
    if (hasFailed || !data) return 'Failed :(';

    return (
      <div className={styles.GridContainer}>
        <div className={`${styles.GridItem} ${styles.ListSection}`}>
          <SearchBar />
          <BookingsList list={data} />
        </div>
        <div className={`${styles.GridItem} ${styles.MainSection}`}>
          <h1 className={styles.Title}>Welcome!</h1>
          <CalendarLogo />
        </div>
      </div>
    );
  }
}
