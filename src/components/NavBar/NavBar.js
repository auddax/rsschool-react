import React from 'react';
import SearchForm from '../SearchForm';
import logoImage from '../../assets/img/logo.png';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
class NavBar extends React.Component {
    render() {
        return (React.createElement("nav", { className: styles['navbar'] },
            React.createElement("img", { className: styles['navbar__logo'], src: logoImage, alt: "Organic Food Logo" }),
            React.createElement("ul", { className: styles['navbar__items'] },
                React.createElement("li", null,
                    React.createElement(Link, { to: '/main', className: styles['navbar__link'] }, "Home"),
                    ' '),
                React.createElement("li", null,
                    React.createElement(Link, { to: '/about', className: styles['navbar__link'] }, "About us"))),
            React.createElement("div", { className: styles['navbar__controls'] },
                React.createElement(SearchForm, null))));
    }
}
export default NavBar;
