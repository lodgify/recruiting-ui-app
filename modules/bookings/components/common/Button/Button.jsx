import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text = 'Create Booking', classes = '' }) => {
  return (
    <button className={classes} aria-label={text}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.shape(),
};

export default Button;
