import React, { ReactNode } from 'react';
import styles from './Products.module.css';

class Products extends React.Component {
  render(): ReactNode {
    return (
      <section className={styles['products']}>
        <ProductsList />
      </section>
    );
  }
}

export default Products;
