import React, { useContext } from 'react';
import PhotosList from '../PhotosList';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';
import styles from './Products.module.scss';
import SearchContext from '../../context/SearchContext';
import { SearchContextType } from '../../types/interfaces';

const Products = () => {
  const { photosList, isLoading } = useContext(SearchContext) as SearchContextType;
  return (
    <section className={styles['products']}>
      {isLoading ? (
        <Spinner />
      ) : photosList.length > 0 ? (
        <PhotosList photosList={photosList} />
      ) : (
        <ErrorMessage />
      )}
    </section>
  );
};

export default Products;
