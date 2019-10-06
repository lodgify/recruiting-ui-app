import React, { useCallback } from 'react';
import { func, string } from 'prop-types';
import debounce from 'lodash.debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

import { Input } from '../Input';
import styles from './styles.css';

export const Component = props => {
  const onSearchDebounced = useCallback(debounce(props.onSearch, 250), []);

  return (
    <div className={styles.container}>
      <Input
        placeholder="Search"
        value={props.searchTerm}
        onChange={value => onSearchDebounced(value)}
        icon={faSearch}
      />
      <div className={styles.filterContainer}>
        <FontAwesomeIcon icon={faFilter} />
      </div>
    </div>
  );
};

Component.propTypes = {
  onSearch: func.isRequired,
  searchTerm: string,
};
