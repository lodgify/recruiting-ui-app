import React from 'react';
import { BookingArrayProps } from '../../../../state/state';

import Item from './Item';
import styles from './index.css';

class BookingList extends React.PureComponent {
  static propTypes = {
    bookings: BookingArrayProps,
  };

  render() {
    return (
      <div className={styles.BookingList}>
        {this.props.bookings.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default BookingList;
