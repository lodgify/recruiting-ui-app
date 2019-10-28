import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const propTypes = {
  // fetchBookings: func.isRequired
};

const SearchBar = () => {
  return <div className={styles.SearchBar}>
    <input type="text" name="search" />
    <button>filter</button>
  </div>;
};

SearchBar.displayName = 'SearchBar';
SearchBar.propTypes = propTypes;

export default SearchBar;
