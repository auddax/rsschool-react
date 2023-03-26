import Reviews from '../../components/Reviews';
import React, { ReactNode } from 'react';
import Header from '../../components/Header';

class ReviewsPage extends React.Component {
  render(): ReactNode {
    return (
      <>
        <Header />
        <Reviews />
      </>
    );
  }
}

export default ReviewsPage;
