import ReviewsForm from 'components/ReviewsForm';
import React, { ReactNode } from 'react';

class Reviews extends React.Component {
  render(): ReactNode {
    return (
      <section>
        <ReviewsForm />
      </section>
    );
  }
}

export default Reviews;
