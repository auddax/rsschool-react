import React, { ReactNode } from 'react';
import ReviewsForm from '../ReviewsForm';
import styles from './Reviews.module.css';

class Reviews extends React.Component {
  render(): ReactNode {
    return (
      <section className={styles['reviews']}>
        <ReviewsForm />
      </section>
    );
  }
}

export default Reviews;
