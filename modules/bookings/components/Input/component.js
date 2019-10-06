import React from 'react';
import { func, object, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.css';

export const Component = props => {
  return (
    <div className={styles.container}>
      <input
        value={props.value}
        placeholder={props.placeholder}
        onChange={e => props.onChange(e.target.value)}
        className={styles.input}
      />
      {props.icon && (
        <FontAwesomeIcon icon={props.icon} className={styles.icon} />
      )}
    </div>
  );
};

Component.propTypes = {
  onChange: func.isRequired,
  value: string,
  placeholder: string,
  icon: object,
};
