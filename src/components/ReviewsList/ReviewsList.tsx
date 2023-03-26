import React, { ReactNode } from 'react';
import ReviewCard from '../ReviewCard';
import styles from './ReviewsList.module.css';

class ReviewsList extends React.Component {
  render(): ReactNode {
    const { products } = this.props;
    return (
      <div className={styles['products-list']}>
        {products.map((product) => {
          return <ReviewCard data={product} key={product[1]} />;
        })}
      </div>
    );
  }
}

export default ReviewsList;
