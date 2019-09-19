import React from 'react';
import styles from './Wrapper.css';

const Wrapper = ({ children, classes = '' }) => {
  return <section className={classes || styles.wrapper}>{children}</section>;
};

export default Wrapper;
