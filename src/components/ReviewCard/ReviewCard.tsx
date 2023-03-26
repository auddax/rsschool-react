import React, { ReactNode } from 'react';
import { ReviewCardProps } from 'types/interfaces';
import Card from '../Card';
import styles from './ReviewCard.module.css';

class ReviewCard extends React.Component<ReviewCardProps> {
  render(): ReactNode {
    const data = this.props.data;
    return (
      <Card>
        <p className={styles['card-price']}>Отзыв: {data.reviewText}</p>
        <p className={styles['card-price']}>Дата: {data.purchaseDate}</p>
        <p className={styles['card-price']}>Категория: {data.productType}</p>
        <p className={styles['card-price']}>Оценка: {data.rate}</p>
      </Card>
    );
  }
}

export default ReviewCard;
