import React, { useEffect } from 'react';
import { unsplashAPI } from '../../api/api';
import { photoSlice } from '../../store/reducers/PhotoSlice';
import { useAppDispatch } from '../../hooks/redux';
import PhotosList from '../PhotosList';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';
import styles from './Photos.module.scss';

const Photos = () => {
  const { setPhotosList } = photoSlice.actions;
  const dispatch = useAppDispatch();
  const { data: photosList, isLoading } = unsplashAPI.useGetPhotosListQuery(10);

  useEffect(() => {
    dispatch(setPhotosList(photosList));
  }, [dispatch, photosList, setPhotosList]);

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

export default Photos;
