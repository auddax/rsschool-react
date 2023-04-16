import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import PhotosList from '../PhotosList';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';
import styles from './Photos.module.scss';

const Photos = () => {
  const {
    photos: photosList,
    isLoading,
    isSuccess,
  } = useAppSelector((state) => state.photoReducer);

  return (
    <section className={styles['products']}>
      {isLoading ? (
        <Spinner />
      ) : isSuccess ? (
        <PhotosList photosList={photosList} />
      ) : (
        <ErrorMessage />
      )}
    </section>
  );
};

export default Photos;
