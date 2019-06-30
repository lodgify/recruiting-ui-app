import React from 'react';

import IconCalendar from 'static/calendar.svg';
import styles from './index.scss';

const Content = () => {
  return (
    <div className={styles.content}>
      <IconCalendar />
      <h1>reservations</h1>
      <p>select any reservation item</p>
      <button>create booking</button>
      <button>create booking with quote</button>
    </div>
  );
};

export default Content;
