import React from 'react';

import { BookingsEntityProps } from 'modules/bookings/bookingsEntityProps';
import styles from './index.scss';
import SearchFilter from './SearchFilter';
import IconDownload from 'static/download.svg';
import IconRefresh from 'static/reload.svg';

import BookingsItem from './BookingsItem';

class Sidebar extends React.PureComponent {
  static propTypes = {
    items: BookingsEntityProps,
  };

  render() {
    return (
      <div className={styles.sidebar}>
        <SearchFilter />

        <div className={styles.list}>
          {this.props.items.map(item => (
            <BookingsItem key={item.id} item={item} />
          ))}
        </div>

        <div className={styles.itemsOptionsContainer}>
          <span>select</span>
          <IconDownload />
          <IconRefresh />
        </div>

        <div className={styles.createBookingContainer}>
          <button>create booking</button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
