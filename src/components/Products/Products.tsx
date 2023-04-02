import React, { useState, useEffect } from 'react';
import ProductsList from '../ProductsList';
import ErrorMessage from '../ErrorMessage';
import { productsList } from '../../../__mocks__/products';
import styles from './Products.module.scss';

const Products = () => {
  const [products, setProducts] = useState<string[][]>([]);

  useEffect(() => {
    // getProducts().then((data) => {
    //   this.setState({ products: data });
    // });
    setProducts(productsList);
  }, []);

  return (
    <section className={styles['products']}>
      {products ? <ProductsList products={products} /> : <ErrorMessage />}
    </section>
  );
};

export default Products;
