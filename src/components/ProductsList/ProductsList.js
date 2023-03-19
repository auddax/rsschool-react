import React from 'react';
import ProductCard from '../ProductCard';
import styles from './ProductsList.module.css';
class ProductsList extends React.Component {
    render() {
        const { products } = this.props;
        return (React.createElement("div", { className: styles['products-list'] }, products.map((product) => {
            return React.createElement(ProductCard, { data: product, key: product[1] });
        })));
    }
}
export default ProductsList;
