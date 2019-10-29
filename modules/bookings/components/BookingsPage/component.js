import React from 'react';
import { func, bool, arrayOf, shape, string } from 'prop-types';

import CalendarLogo from '../../../../static/calendar.svg';
import styles from './styles.css';
import SearchBar from './SearchBar/component';
import BookingsList from './BookingsList/component';
import { filterDataByGuestName } from '../../utils/searchUtils';

export class Component extends React.PureComponent {
  static displayName = 'BookingsPage';
  static propTypes = {
    fetchBookings: func.isRequired,
    updateSearchKeyword: func.isRequired,
    isLoading: bool,
    hasFailed: bool,
    data: arrayOf(shape({ guestName: string })),
    searchKeyword: string,
  };

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    const {
      isLoading,
      hasFailed,
      data,
      searchKeyword,
      updateSearchKeyword,
    } = this.props;
    if (isLoading) return 'Loading…';
    if (hasFailed || !data) return 'Failed :(';

    return (
      <div className={styles.GridContainer}>
        <div className={`${styles.GridItem} ${styles.ListSection}`}>
          <SearchBar onChange={updateSearchKeyword} />
          <BookingsList list={filterDataByGuestName(data, searchKeyword)} />
        </div>
        <div className={`${styles.GridItem} ${styles.MainSection}`}>
          <h1 className={styles.Title}>Welcome!</h1>
          <CalendarLogo />
        </div>
      </div>
    );
  }
}
