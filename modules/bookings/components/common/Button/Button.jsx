import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.css';

const Button = ({ text = 'Create Booking', styles = '' }) => {
  return (
    <button className={classes.Button || styles} aria-label={text}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.shape(),
};

export default Button;
