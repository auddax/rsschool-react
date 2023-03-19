import React, { ReactNode } from 'react';
import SearchForm from '../SearchForm';
import logoImage from '../../assets/img/logo.png';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render(): ReactNode {
    return (
      <nav className={styles['navbar']}>
        <img className={styles['navbar__logo']} src={logoImage} alt="Organic Food Logo" />
        <ul className={styles['navbar__items']}>
          <li>
            <Link to={'/main'}>Home</Link>{' '}
          </li>
          <li>
            <Link to={'/about'}>About us</Link>
          </li>
        </ul>
        <div className={styles['navbar__controls']}>
          <SearchForm />
        </div>
      </nav>
    );
  }
}

export default NavBar;
