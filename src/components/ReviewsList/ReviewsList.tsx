import React from 'react';
import ReviewCard from '../ReviewCard';
import styles from './ReviewsList.module.scss';
import { useAppSelector } from '../../hooks/redux';

const ReviewsList = () => {
  const { reviews } = useAppSelector((state) => state.formReducer);
  return (
    <div className={styles['reviews-list']}>
      {reviews.map((review, index) => {
        return <ReviewCard data={review} key={'review' + index} />;
      })}
    </div>
  );
};

export default ReviewsList;
