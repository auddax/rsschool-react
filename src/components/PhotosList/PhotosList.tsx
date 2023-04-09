import React from 'react';
import PhotoCard from '../PhotoCard';
import { PhotosListProps } from 'types/interfaces';
import styles from './PhotosList.module.scss';

const PhotosList = (props: PhotosListProps) => {
  const { photosList } = props;
  return (
    <div className={styles['photos-list']}>
      {photosList.map((photo) => {
        return <PhotoCard data={photo} key={photo.id} />;
      })}
    </div>
  );
};

export default PhotosList;
