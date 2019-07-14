import React from 'react';
import BookingListHeader from './components/Header';
import BookingListFooter from './components/Footer';
import ListItem from '../ListItem/ListItem';
import styles from './BookingList.css';

const BookingList = ({ data }) => {
  return (
    <section className={styles.bookingList}>
      <BookingListHeader />
      <ul>
        {data.map((item, i) => (
          <ListItem
            isFirst={i === 0 ? true : false}
            key={item.id}
            item={item}
          />
        ))}
      </ul>
      <BookingListFooter />
    </section>
  );
};

export default BookingList;
