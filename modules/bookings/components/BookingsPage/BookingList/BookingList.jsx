import React from 'react';
import Header from './components/Header';
import ListItem from '../ListItem/ListItem';
import styles from './BookingList.css';

const BookingList = ({ data }) => {
  return (
    <section className={styles.bookingList}>
      <Header />
      <ul>
        {data.map(item => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default BookingList;
