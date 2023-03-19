import React, { ReactNode } from 'react';
import SearchForm from 'components/SearchForm';
import logoImage from '../../assets/img/logo.png';
import styles from './NavBar.module.css';

class NavBar extends React.Component {
  render(): ReactNode {
    return (
      <nav className={styles['navbar']}>
        <img className={styles['navbar__logo']} src={logoImage} alt="Organic Food Logo" />
        <ul className={styles['navbar__items']}>
          <li>Home</li>
          <li>Product</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
        <div className={styles['navbar__controls']}>
          <SearchForm />
        </div>
      </nav>
    );
  }
}

export default NavBar;
