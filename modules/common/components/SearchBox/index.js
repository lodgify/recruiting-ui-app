import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../../../../static/search.svg';
import styles from './styles.css';

export default function SearchBox(props) {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className={`${styles.SearchBox} ${props.className}`}>
      <input
        placeholder="Search"
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
}

SearchBox.propTypes = {
  className: PropTypes.string,
};
