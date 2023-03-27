import React, { ReactNode } from 'react';
import { ReviewCardProps } from 'types/interfaces';
import Card from '../Card';
import styles from './ReviewCard.module.css';

class ReviewCard extends React.Component<ReviewCardProps> {
  render(): ReactNode {
    const { reviewText, purchaseDate, productType, rate, visibility, customerName } =
      this.props.data;

    return (
      <Card>
        <p className={styles['card-price']}>
          <>Отзыв: {reviewText}</>
        </p>
        <p className={styles['card-price']}>
          <>Дата: {purchaseDate}</>
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
  }
}

export default ReviewCard;
