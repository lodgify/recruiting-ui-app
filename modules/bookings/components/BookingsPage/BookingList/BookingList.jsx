import React from 'react';
import ListItem from '../ListItem/ListItem';
import styles from './BookingList.css';

const BookingList = ({ data }) => {
  return (
    <section className={styles.bookingList}>
      <ul>
        {data.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default BookingList;
