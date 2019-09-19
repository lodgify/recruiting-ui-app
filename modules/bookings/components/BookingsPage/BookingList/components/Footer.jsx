import React from 'react';
import styles from './Footer.css';
import Button from '../../../common/Button/Button';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Button styles={styles.Button} text="Create Booking" />
    </footer>
  );
};

export default Footer;
