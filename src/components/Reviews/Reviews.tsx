import React, { useState } from 'react';
import ReviewsList from '../ReviewsList';
import ReviewsForm from '../ReviewsForm';
import styles from './Reviews.module.scss';
import { IReview } from 'types/interfaces';

const Reviews = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);

  const handleReviews = (review: IReview): void => {
    setReviews((prevState: IReview[]) => [...prevState, review]);
  };

  return (
    <section className={styles['reviews']}>
      <ReviewsList reviews={reviews} />
      <ReviewsForm handleReviews={handleReviews} />
    </section>
  );
};

export default Reviews;
