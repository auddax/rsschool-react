import React, { ReactNode } from 'react';
import { ReviewsListProps } from 'types/interfaces';
import ReviewCard from '../ReviewCard';
import styles from './ReviewsList.module.css';

class ReviewsList extends React.Component<ReviewsListProps> {
  render(): ReactNode {
    const { reviews } = this.props;
    return (
      <div className={styles['reviews-list']}>
        {reviews.map((review, index) => {
          return <ReviewCard data={review} key={'review' + index} />;
        })}
      </div>
    );
  }
}

export default ReviewsList;
