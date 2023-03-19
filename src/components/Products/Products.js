import React from 'react';
import ProductsList from '../ProductsList';
import styles from './Products.module.css';
import getProducts from '../../api/api';
class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            products: [],
        };
    }
    componentDidMount() {
        getProducts().then((data) => {
            this.setState({ products: data });
        });
    }
    render() {
        const { products } = this.state;
        return (React.createElement("section", { className: styles['products'] },
            React.createElement(ProductsList, { products: products })));
    }
}
export default Products;
