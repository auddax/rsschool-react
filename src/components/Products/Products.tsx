import React, { useState, useEffect } from 'react';
import PhotosList from '../PhotosList';
import ErrorMessage from '../ErrorMessage';
import { getPhotosList } from '../../api/api';
import styles from './Products.module.scss';
import { IPhoto } from 'types/interfaces';

const Products = () => {
  const [photosList, setPhotosList] = useState<IPhoto[]>([]);

  useEffect(() => {
    getPhotosList().then((data) => {
      setPhotosList(data);
    });
  }, []);

  return (
    <section className={styles['products']}>
      {photosList ? <PhotosList photosList={photosList} /> : <ErrorMessage />}
    </section>
  );
};

export default Products;
