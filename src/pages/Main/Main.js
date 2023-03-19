import React from 'react';
import Header from '../../components/Header';
import Products from '../../components/Products';
import './Main.module.css';
class Main extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(Header, null),
            React.createElement(Products, null)));
    }
}
export default Main;
