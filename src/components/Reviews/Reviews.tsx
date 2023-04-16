import React from 'react';
import ReviewsList from '../ReviewsList';
import ReviewsForm from '../ReviewsForm';
import styles from './Reviews.module.scss';

const Reviews = () => {
  return (
    <section className={styles['reviews']}>
      <ReviewsList />
      <ReviewsForm />
    </section>
  );
};

export default Reviews;
