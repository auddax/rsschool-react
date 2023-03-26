import React, { ReactNode } from 'react';
import Card from '../Card';
import styles from './ReviewCard.module.css';

class ReviewCard extends React.Component {
  render(): ReactNode {
    const data = this.props.data;
    return (
      <Card>
        <figure className={styles['card-img']}>
          <img src={data[3]} alt={data[0].split(' ')[0]} />
        </figure>
        <h3 className={styles['card-title']}>{data[0]}</h3>
        <p className={styles['card-price']}>Цена: {data[4]}</p>
        <p className={styles['card-instock']}>Доступно: {data[8]}</p>
      </Card>
    );
  }
}

export default ReviewCard;
