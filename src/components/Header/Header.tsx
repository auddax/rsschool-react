import React from 'react';
import NavBar from '../NavBar';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <NavBar />
      <div className={styles['title']}>
        <h1>Grocery Store</h1>
      </div>
    </header>
  );
};

export default Header;
