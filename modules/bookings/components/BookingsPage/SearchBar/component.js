import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const propTypes = {
  onChange: PropTypes.func.isRequired
};

const SearchBar = ({ onChange }) => {
  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder="Search..."
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

SearchBar.displayName = 'SearchBar';
SearchBar.propTypes = propTypes;

export default SearchBar;
