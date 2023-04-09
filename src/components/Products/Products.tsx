import React, { useState, useEffect } from 'react';
import ProductsList from '../ProductsList';
import ErrorMessage from '../ErrorMessage';
import { getPhotosList } from '../../api/api';
import styles from './Products.module.scss';

const Products = () => {
  const [photosList, setPhotosList] = useState<string[][]>([]);

  useEffect(() => {
    getPhotosList().then((data) => {
      setPhotosList(data);
    });
  }, []);

  return (
    <section className={styles['products']}>
      {photosList ? <ProductsList products={photosList} /> : <ErrorMessage />}
    </section>
  );
};

export default Products;
