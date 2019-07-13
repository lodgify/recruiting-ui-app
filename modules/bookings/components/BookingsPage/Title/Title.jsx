import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ styles, text }) => <h1 className={styles}>{text}</h1>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

export default Title;
