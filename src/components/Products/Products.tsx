import React, { useContext } from 'react';
import PhotosList from '../PhotosList';
import ErrorMessage from '../ErrorMessage';
import styles from './Products.module.scss';
import SearchContext from '../../context/SearchContext';
import { SearchContextType } from '../../types/interfaces';

const Products = () => {
  const { photosList } = useContext(SearchContext) as SearchContextType;
  return (
    <section className={styles['products']}>
      {photosList ? <PhotosList photosList={photosList} /> : <ErrorMessage />}
    </section>
  );
};

export default Products;
