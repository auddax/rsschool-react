import React, { ReactNode } from 'react';
import ReviewsList from '../ReviewsList';
import ReviewsForm from '../ReviewsForm';
import styles from './Reviews.module.css';
import { IReview } from 'types/interfaces';

class Reviews extends React.Component<object, { reviews: IReview[] }> {
  constructor(props: object) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.handleReviews = this.handleReviews.bind(this);
  }

  handleReviews(review: IReview): void {
    this.setState((prevState) => ({
      reviews: [...prevState.reviews, review],
    }));
  }

  render(): ReactNode {
    const { reviews } = this.state;
    return (
      <section className={styles['reviews']}>
        <ReviewsList reviews={reviews} />
        <ReviewsForm handleReviews={this.handleReviews} />
      </section>
    );
  }
}

export default Reviews;
