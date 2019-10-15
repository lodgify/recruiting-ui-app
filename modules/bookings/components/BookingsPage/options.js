import React from 'react';
import styles from './styles.css';
import ReloadIcon from 'static/reload.svg';
import DownloadIcon from 'static/download.svg';

function Options() {
  return (
    <div className={styles.optionsContainer}>
      <div>
        <p className={styles.select}>Select</p>
      </div>
      <div>
        <DownloadIcon />
      </div>
      <div>
        <ReloadIcon />
      </div>
    </div>
  );
}

export default Options;
