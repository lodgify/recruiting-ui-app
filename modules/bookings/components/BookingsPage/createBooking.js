import React from 'react';
import styles from './styles.css';
import { string } from 'prop-types';

function CreateBooking(props) {
  const buttonStyle = props.buttonStyle
    ? props.buttonStyle
    : styles.createBookingButton;
  const buttonText = props.buttonText ? props.buttonText : 'CREATE BOOKING';
  return (
    <button className={buttonStyle}>
      <p className={styles.createBooking}>{buttonText}</p>
    </button>
  );
}

CreateBooking.propTypes = {
  buttonStyle: string,
  buttonText: string,
};

export default CreateBooking;
