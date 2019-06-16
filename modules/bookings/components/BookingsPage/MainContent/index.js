import React from 'react';

import CalendarLogo from '../../../../../static/calendar.svg';

import styles from './index.css';

const MainContent = () => {
  return (
    <div className={styles.Content}>
      <div>
        <CalendarLogo />
        <h1>Reservations</h1>
        <p>Select any reservation item</p>

        <button>Create Booking</button>
        <button>Create Booking with Quote</button>
      </div>
    </div>
  );
};

export default MainContent;
