import React, { ReactNode } from 'react';
import ProductsList from '../ProductsList';
import styles from './Products.module.css';
import { products } from '../../../__mocks__/products';
import ErrorMessage from '../ErrorMessage';

class Products extends React.Component<object, { isLoading: boolean; products: string[][] }> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoading: false,
      products: [],
    };
  }

  componentDidMount(): void {
    // getProducts().then((data) => {
    //   this.setState({ products: data });
    // });
    this.setState({
      products,
    });
  }

  render(): ReactNode {
    const { products } = this.state;
    return (
      <section className={styles['products']}>
        {products ? <ProductsList products={products} /> : <ErrorMessage />}
      </section>
    );
  }
}

export default Products;
