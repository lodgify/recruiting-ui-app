import React from 'react';
import styles from './Header.css';
import Search from '../../../common/svg/Search';

const Header = () => {
  return (
    <header className={styles.Header}>
      <section className={styles.inputContainer}>
        <input type="search" placeholder="Search" />
        <Search />
      </section>
      <section>Icon</section>
    </header>
  );
};

export default Header;
