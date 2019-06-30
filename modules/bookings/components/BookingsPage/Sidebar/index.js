import React from 'react';

import styles from './index.scss';
import SearchFilter from './SearchFilter';
import IconDownload from 'static/download.svg';
import IconRefresh from 'static/reload.svg';

class Sidebar extends React.PureComponent {
  render() {
    return (
      <div className={styles.sidebar}>
        <SearchFilter />

        <div className={styles.list} />

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
