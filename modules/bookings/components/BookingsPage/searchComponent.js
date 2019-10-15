import React, { useEffect } from 'react';
import { func } from 'prop-types';
import styles from './styles.css';
import FilterIcon from 'static/filter.svg';
import SearchIcon from 'static/search.svg';
import { useInputHandler } from 'hooks';

function SearchComponent(props) {
  const searchInput = useInputHandler('');

  useEffect(() => {
    props.onSearch(searchInput.value);
  }, [searchInput.value]);

  return (
    <div className={styles.searchContainer}>
      <input
        {...searchInput}
        className={styles.inputField}
        placeholder={'Search'}
      />
      <i className={styles.searchIconStyle}>
        <SearchIcon width={15} height={15} />
      </i>
      <div className={styles.filterIconPosition}>
        <FilterIcon width={15} height={15} />
      </div>
    </div>
  );
}

SearchComponent.propTypes = {
  onSearch: func.isRequired,
};

export default SearchComponent;
