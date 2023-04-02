import React from 'react';
import ProductCard from '../ProductCard';
import { ProductsListProps } from 'types/interfaces';
import styles from './ProductsList.module.scss';

const ProductsList = (props: ProductsListProps) => {
  const { products } = props;
  return (
    <div className={styles['products-list']}>
      {products.map((product) => {
        return <ProductCard data={product} key={product[1]} />;
      })}
    </div>
  );
};

export default ProductsList;
