import React from 'react';
import Header from './components/Header';
import ListItem from '../ListItem/ListItem';
import styles from './BookingList.css';

const BookingList = ({ data }) => {
  return (
    <section className={styles.bookingList}>
      <Header />
      <ul>
        {data.map((item, i) => (
          <ListItem
            isFirst={i === 0 ? true : false}
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    </section>
  );
};

export default BookingList;
