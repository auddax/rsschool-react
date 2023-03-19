import React from 'react';
import Card from '../Card';
import styles from './ProductCard.module.css';
class ProductCard extends React.Component {
    render() {
        const data = this.props.data;
        return (React.createElement(Card, null,
            React.createElement("figure", { className: styles['card-img'] },
                React.createElement("img", { src: data[3], alt: data[0].split(' ')[0] })),
            React.createElement("h3", { className: styles['card-title'] }, data[0]),
            React.createElement("p", { className: styles['card-price'] },
                "\u0426\u0435\u043D\u0430: ",
                data[4]),
            React.createElement("p", { className: styles['card-instock'] },
                "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E: ",
                data[8])));
    }
}
export default ProductCard;
