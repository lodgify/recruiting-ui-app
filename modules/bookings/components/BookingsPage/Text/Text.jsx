import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text, variant, styles }) => {
  switch (variant) {
    case 'h1':
      return <h1 className={styles}>{text}</h1>;
      break;
    default:
      return <p className={styles}>{text}</p>;
      break;
  }
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Text;
