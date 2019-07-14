import React from 'react';
import styles from './Header.css';
import Avatar from '../../../common/svg/Avatar';

const Header = () => {
  return (
    <header classname={styles.Header}>
      <input type="search" placeholder="Search" />
      <Avatar />
    </header>
  );
};

export default Header;
