import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReviewsForm from './ReviewsForm';

describe('Testing ReviewsForm component', () => {
  afterEach(cleanup);

  const handleReviews = jest.fn();

  const props = {
    handleReviews,
  };

  it('renders form inputs', () => {
    const { getByLabelText } = render(<ReviewsForm {...props} />);

    const reviewText = getByLabelText('Напишите о своих впечатлениях');
    expect(reviewText).toBeDefined();

    const purchaseDate = getByLabelText('Дата покупки');
    expect(purchaseDate).toBeDefined();

    const customerName = getByLabelText('Ваше имя');
    expect(customerName).toBeDefined();

    const visibility = getByLabelText('Оставить отзыв анонимно');
    expect(visibility).toBeDefined();

    const photo = getByLabelText('Фото товара');
    expect(photo).toBeDefined();
  });
});
