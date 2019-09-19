import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.css';

const Button = ({ text = 'Create Booking', styles = '' }) => {
  return (
    <button className={styles || classes.Button} aria-label={text}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
