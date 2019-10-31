import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../../../../static/search.svg';
import styles from './styles.css';

export default function SearchBox({ onChange, className }) {
  return (
    <div className={`${styles.SearchBox} ${className}`}>
      <input
        placeholder="Search"
        type="text"
        onChange={e => onChange(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
}

SearchBox.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
