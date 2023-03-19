import React, { ReactNode } from 'react';
import styles from './ProductsList.module.css';

class ProductsList extends React.Component {
  render(): ReactNode {
    return (
      <div className={styles['products-list']}>
        {products.map((product) => {
          return <ProductCard data={product} />;
        })}
      </div>
    );
  }
}

export default ProductsList;
