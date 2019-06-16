import React from 'react';

import SearchLogo from '../../../../../../static/search.svg';
import FilterLogo from '../../../../../../static/filter.svg';

import styles from './index.css';

const Search = () => {
  return (
    <div className={styles.Search}>
      <div className={styles.SearchInput}>
        <input type="text" placeholder="Search" />
        <SearchLogo />
      </div>
      <div className={styles.Filter}>
        <FilterLogo />
      </div>
    </div>
  );
};

export default Search;
