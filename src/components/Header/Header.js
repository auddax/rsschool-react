import React from 'react';
import NavBar from '../NavBar';
import styles from './Header.module.css';
class Header extends React.Component {
    render() {
        return (React.createElement("header", null,
            React.createElement(NavBar, null),
            React.createElement("div", { className: styles['title'] },
                React.createElement("h1", null, "Our catalog"))));
    }
}
export default Header;
