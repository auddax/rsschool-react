import React from 'react';
import { Link } from 'react-router-dom';
import { ILink } from 'types/interfaces';
import SearchForm from '../SearchForm';
import logoImage from '../../assets/img/logo.png';
import styles from './NavBar.module.scss';

const navLinks: ILink[] = [
  {
    text: 'Home',
    route: '/main',
  },
  {
    text: 'About us',
    route: '/about',
  },
  {
    text: 'Gallery',
    route: '/gallery',
  },
];

const NavBar = () => {
  return (
    <nav className={styles['navbar']}>
      <img className={styles['navbar__logo']} src={logoImage} alt="Organic Food Logo" />
      <ul className={styles['navbar__items']}>
        {navLinks.map((link) => (
          <li key={link.route}>
            <Link to={link.route} className={styles['navbar__link']}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles['navbar__controls']}>
        <SearchForm />
      </div>
    </nav>
  );
};

export default NavBar;
