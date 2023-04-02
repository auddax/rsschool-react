import React from 'react';
import { ReviewsListProps } from 'types/interfaces';
import ReviewCard from '../ReviewCard';
import styles from './ReviewsList.module.scss';

const ReviewsList = (props: ReviewsListProps) => {
  const { reviews } = props;
  return (
    <div className={styles['reviews-list']}>
      {reviews.map((review, index) => {
        return <ReviewCard data={review} key={'review' + index} />;
      })}
    </div>
  );
};

export default ReviewsList;
