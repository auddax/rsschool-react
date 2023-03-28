import React, { ReactNode } from 'react';
import { ReviewCardProps } from 'types/interfaces';
import Card from '../Card';
import styles from './ReviewCard.module.scss';

class ReviewCard extends React.Component<ReviewCardProps> {
  render(): ReactNode {
    const { reviewText, purchaseDate, productType, rate, visibility, customerName, photo } =
      this.props.data;
    const imgBlob = photo as Blob;

    return (
      <Card>
        {imgBlob.size > 0 && (
          <figure className={styles['card-img']}>
            <img src={URL.createObjectURL(imgBlob)} alt="Customer photo" />
          </figure>
        )}
        <p className={styles['card-price']}>
          <>Отзыв: {reviewText}</>
        </p>
        <p className={styles['card-price']}>
          <>Дата покупки: {purchaseDate}</>
        </p>
        <p className={styles['card-price']}>
          <>Категория товара: {productType}</>
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
  }
}

export default ReviewCard;
