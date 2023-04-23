import React from 'react';
import { IPhotoList, ReviewCardProps } from 'types/interfaces';
import Card from '../Card';
import styles from './ReviewCard.module.scss';

const ReviewCard = (props: ReviewCardProps) => {
  const { reviewText, purchaseDate, productType, rate, visibility, customerName, photo } =
    props.data;
  const photoList = photo as IPhotoList;
  const photoFile = photoList[0] as Blob;

  return (
    <Card>
      {photo && photo.length > 0 && (
        <figure className={styles['card-img']}>
          <img src={URL.createObjectURL(photoFile)} alt="Customer photo" />
        </figure>
      )}
      <p className={styles['card-price']}>
        <>Описание фото: {reviewText}</>
      </p>
      <p className={styles['card-price']}>
        <>Дата съемки: {purchaseDate}</>
      </p>
      <p className={styles['card-price']}>
        <>Категория: {productType}</>
      </p>
      <p className={styles['card-price']}>
        <>Оценка: {rate}</>
      </p>
      {!visibility && (
        <p>
          <i>
            <>{customerName}</>
          </i>
        </p>
      )}
    </Card>
  );
};

export default ReviewCard;
