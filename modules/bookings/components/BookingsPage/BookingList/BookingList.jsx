import React from 'react';
import ListItem from '../ListItem/ListItem';

const BookingList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default BookingList;
