import React, { ReactNode } from 'react';
import NavBar from '../NavBar';
import styles from './Header.module.css';

class Header extends React.Component {
  render(): ReactNode {
    return (
      <header>
        <NavBar />
        <div className={styles['title']}>
          <h1>Grocery Store</h1>
        </div>
      </header>
    );
  }
}

export default Header;
