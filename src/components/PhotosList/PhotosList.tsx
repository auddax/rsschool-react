import React, { useState } from 'react';
import PhotoCard from '../PhotoCard';
import { IPhoto, PhotosListProps } from 'types/interfaces';
import styles from './PhotosList.module.scss';
import PhotoModal from '../PhotoModal';

const PhotosList = (props: PhotosListProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<IPhoto | null>(null);
  const { photosList } = props;

  const showModal = (id: string) => {
    const selectedPhoto = photosList.find((photo) => id === photo.id);
    if (selectedPhoto) setData(selectedPhoto);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={styles['photos-list']}>
      {photosList.map((photo) => {
        return <PhotoCard handlerClick={() => showModal(photo.id)} data={photo} key={photo.id} />;
      })}
      {modalVisible && (
        <PhotoModal handlerClick={closeModal} data={{ type: 'photo', data: data }} />
      )}
    </div>
  );
};

export default PhotosList;
