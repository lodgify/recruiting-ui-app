import React from 'react';

import IconSearch from 'static/search.svg';
import IconFilter from 'static/filtericon.svg';
import styles from './index.scss';

const SearchFilter = () => {
  return (
    <div className={styles.searchFilterContainer}>
      <div className={styles.searchInputContainer}>
        <input type="text" placeholder="Search" />
        <IconSearch />
      </div>
      <div className={styles.filterContainer}>
        <IconFilter />
      </div>
    </div>
  );
};

export default SearchFilter;
