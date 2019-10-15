import React, { useState } from 'react';
import styles from './styles.css';
import SearchComponent from './searchComponent';
import ReservationList from './reservationList';
import Options from './options';
import CreateBooking from './createBooking';
import { arrayOf, shape, string } from 'prop-types';

function SideBar({ data }) {
  const [resenvations, setReservations] = useState(data);

  function filterReservations(keyword) {
    const keywordUpperCase = keyword.toUpperCase();
    const newList = data.filter(({ guestName }) => {
      const guestNameUpperCase = guestName.toUpperCase();
      const shouldBeInclude =
        guestNameUpperCase.indexOf(keywordUpperCase) !== -1;
      return shouldBeInclude;
    });
    setReservations(newList);
  }

  return (
    <div className={styles.sidebarContainer}>
      <SearchComponent onSearch={filterReservations} />
      <ReservationList data={resenvations} />
      <Options />
      <CreateBooking />
    </div>
  );
}

SideBar.propTypes = {
  data: arrayOf(shape({ guestName: string })),
};

export default SideBar;
