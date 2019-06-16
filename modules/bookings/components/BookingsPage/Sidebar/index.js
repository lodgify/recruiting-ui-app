import React from 'react';
import { BookingArrayProps } from '../../../state/state';

import Search from './Search';
import BookingList from './BookingList';
import BookingOptions from './BookingOptions';
import CreateBooking from './CreateBooking';

import styles from './index.css';

class Sidebar extends React.PureComponent {
  static propTypes = {
    bookings: BookingArrayProps,
  };

  render() {
    return (
      <div className={styles.Sidebar}>
        <Search />
        <BookingList bookings={this.props.bookings} />
        <BookingOptions />
        <CreateBooking />
      </div>
    );
  }
}

export default Sidebar;
