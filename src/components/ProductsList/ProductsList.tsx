import React, { ReactNode } from 'react';
import ProductCard from 'components/ProductCard';
import { ProductsListProps } from 'types/interfaces';
import styles from './ProductsList.module.css';

class ProductsList extends React.Component<ProductsListProps> {
  render(): ReactNode {
    const { products } = this.props;
    return (
      <div className={styles['products-list']}>
        {products.map((product) => {
          return <ProductCard data={product} key={product[1]} />;
        })}
      </div>
    );
  }
}

export default ProductsList;
