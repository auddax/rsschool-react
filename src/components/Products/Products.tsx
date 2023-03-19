import React, { ReactNode } from 'react';
import ProductsList from '../ProductsList';
import styles from './Products.module.css';
import getProducts from '../../api/api';

class Products extends React.Component<object, { isLoading: boolean; products: [] }> {
  constructor(props: object) {
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

  render(): ReactNode {
    const { products } = this.state;
    return (
      <section className={styles['products']}>
        <ProductsList products={products} />
      </section>
    );
  }
}

export default Products;
