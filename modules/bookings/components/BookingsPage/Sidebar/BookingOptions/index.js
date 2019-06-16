import React from 'react';

import DownloadLogo from '../../../../../../static/download.svg';
import ReloadLogo from '../../../../../../static/reload.svg';

import styles from './index.css';

const BookingOptions = () => {
  return (
    <div className={styles.BookingOptions}>
      <button>Select</button>
      <DownloadLogo />
      <ReloadLogo />
    </div>
  );
};

export default BookingOptions;
